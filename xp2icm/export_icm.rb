# InfoWorks ICM UI script - export_icm.rb (script_version 1.0.0, manifest schema 2)
#
# Exports from the results object that is OPEN in the ICM UI:
#   network/node.CSV, sub.CSV, all links.CSV, landuse.CSV, runoff.CSV  (ODEC export only)
#   results/<model object id>_Max/{Nodes,Links,Subcatchments}.shp/.shx/.dbf/.prj + FieldNames.csv
#   manifest.json
# Read-only: no network change, no selection change, no simulation run.
# Writes only into the folder the user picks. File names are fixed by this script.
# CSV files are written by ODEC only (odec_export_ex); this script never writes CSV content.
#
# How to run: open the results object (simulation with results loaded), then
# Network > Run Ruby Script > export_icm.rb.

require 'fileutils'
require 'time'
require 'open3'

SCRIPT_VERSION = '1.0.0'.freeze
SCHEMA = 2
UNITS = 'US'.freeze
UNITS_BEHAVIOUR = 'User'.freeze # ODEC units option; spec fixes US units, see workflow log

# ---------------------------------------------------------------------------
# ODEC configuration (embedded). A cfg is a DBX002 file listing every ODEC table;
# the exported table carries a field list: {{header,Field,Default,Default,Default,internal_field},...}
# The cfg files are written to <export folder>/_cfg first, used, then deleted.
# ---------------------------------------------------------------------------
CFG_TABLES = %w[
  hw_node hw_conduit hw_2d_boundary_line hw_2d_connect_line hw_2d_line_source hw_2d_point_source hw_2d_zone
].concat(['All Links', 'All Nodes']).concat(%w[
  hw_arma hw_bank_survey hw_2d_linear_structure hw_blockage hw_bridge hw_bridge_blockage hw_bridge_inlet
  hw_2d_bridge hw_bridge_opening hw_bridge_outlet hw_swmm_land_use hw_building hw_channel hw_channel_shape
  hw_cross_section_survey hw_culvert_inlet hw_culvert_outlet hw_damage_receptor hw_flap_valve hw_flow_efficiency
  hw_flume hw_general_line hw_general_point hw_ground_infiltration hw_head_discharge hw_head_unit_discharge
  hw_headloss hw_2d_ic_polygon hw_2d_inf_ic_polygon hw_2d_sed_ic_polygon hw_2d_wq_ic_polygon hw_2d_infil_surface
  hw_2d_infiltration_zone hw_inline_bank hw_irregular_weir hw_land_use hw_mesh_level_zone hw_mesh_zone
  hw_unit_hydrograph_month hw_2d_results_line hw_1d_results_point hw_2d_results_point hw_2d_results_polygon
  hw_orifice hw_pdm_descriptor hw_2d_permeable_zone hw_polygon hw_porous_polygon hw_porous_wall hw_pump
  hw_risk_impact_zone hw_river_reach hw_roughness_definition hw_roughness_zone hw_unit_hydrograph
  hw_runoff_surface hw_screen hw_sediment_grading hw_shape hw_siphon hw_sluice hw_2d_sluice hw_snow_pack
  hw_spatial_rain_source hw_spatial_rain_zone hw_storage_area hw_subcatchment hw_suds_control
  hw_2d_turbulence_model hw_2d_turbulence_zone hw_tvd_connector hw_user_control hw_weir
]).freeze

def numbered(prefix, count)
  (1..count).map { |i| "#{prefix}#{i}" }
end

# One entry per network CSV. Fields are the required fields from the spec; header == internal name.
EXPORTS = [
  {
    key: :nodes, cfg: 'node.cfg', csv: 'node.CSV', cfg_table: 'hw_node', count_table: 'hw_node',
    odec_tables: ['Node'],
    fields: %w[node_id node_type ground_level chamber_roof chamber_floor]
  },
  {
    key: :subcatchments, cfg: 'sub.cfg', csv: 'sub.CSV', cfg_table: 'hw_subcatchment', count_table: 'hw_subcatchment',
    odec_tables: ['Subcatchment'],
    fields: %w[subcatchment_id node_id land_use_id total_area catchment_dimension catchment_slope
               area_measurement_type] + numbered('area_percent_', 12) + numbered('area_absolute_', 12)
  },
  {
    key: :links, cfg: 'links.cfg', csv: 'all links.CSV', cfg_table: 'All Links', count_table: '_links',
    odec_tables: ['AllLinks'], # documented rule: UI table name with spaces removed (wsbasenetworkobject.md)
    fields: %w[us_node_id link_suffix ds_node_id asset_id conduit_height conduit_length capacity
               us_invert ds_invert]
  },
  {
    key: :land_uses, cfg: 'landuse.cfg', csv: 'landuse.CSV', cfg_table: 'hw_land_use', count_table: 'hw_land_use',
    odec_tables: ['Landuse'],
    fields: %w[land_use_id] + numbered('runoff_index_', 12) + numbered('p_area_', 12)
  },
  {
    key: :runoff_surfaces, cfg: 'runoff.cfg', csv: 'runoff.CSV', cfg_table: 'hw_runoff_surface',
    count_table: 'hw_runoff_surface',
    odec_tables: ['Runoffsurface'],
    fields: %w[runoff_index surface_type]
  }
].freeze

# The results shapefile export cannot run from the UI (ICM 2027.2: "The method cannot be run from the
# user interface"), so it runs in an Exchange script. That script is embedded here, written to
# <export folder>/_cfg/ at run time (like the cfg files), launched with ICMExchange.exe, then deleted.
# Single-quoted heredoc: no interpolation, the text is written exactly as shown.
# Arguments (ARGV[0] is 'ADSK'): 1 database path, 2 sim id, 3 sim name, 4 results folder, 5 status file.
# The status file is the result channel ('EXCHANGE_EXPORT_OK' or 'ERROR: ...'); stdout came back empty
# when ICMExchange was started from the UI.
EXCHANGE_SCRIPT_NAME = 'export_results_exchange.rb'.freeze
EXCHANGE_SCRIPT_TEXT = <<~'EXCHANGE_RUBY'.freeze
  # Generated by export_icm.rb - Exchange script, read-only on the database.
  # ICM 2027.2 table names: nodes and subcatchments are hw_ tables, all links are '_links'.
  SHP_TABLES = %w[hw_node _links hw_subcatchment].freeze

  db_path, sim_id_text, sim_name, results_dir, status_file = ARGV[1], ARGV[2], ARGV[3], ARGV[4], ARGV[5]

  def write_status(path, text)
    File.open(path, 'w') { |f| f.write(text) } unless path.nil? || path.strip.empty?
  end

  begin
    write_status(status_file, "STARTED\nruby #{RUBY_VERSION}\nargs #{ARGV.inspect}\n")

    if [db_path, sim_id_text, sim_name, results_dir, status_file].any? { |a| a.nil? || a.strip.empty? }
      raise 'usage: database_path sim_id sim_name results_folder status_file'
    end
    raise "simulation id is not an integer: #{sim_id_text}" unless sim_id_text =~ /\A\d+\z/
    raise "results folder does not exist: #{results_dir}" unless File.directory?(results_dir)
    sim_id = sim_id_text.to_i

    # Exchange defaults to native (SI) units; match the UI so results and network CSVs use user units.
    WSApplication.use_user_units = true

    db = WSApplication.open(db_path, false)
    sim = db.model_object_from_type_and_id('Sim', sim_id)
    raise "no Sim with id #{sim_id} in #{db_path}" if sim.nil?
    raise "Sim id #{sim_id} is named '#{sim.name}', expected '#{sim_name}'" unless sim.name == sim_name

    available = sim.list_results_gis_export_tables
    tables = SHP_TABLES.map do |table|
      available.find { |t| t.to_s == table } ||
        raise("results GIS table '#{table}' not offered by ICM (available: #{available.inspect})")
    end

    puts "Exporting Max results of Sim #{sim_id} '#{sim.name}' tables #{tables.inspect} to #{results_dir}"
    sim.results_gis_export('shp', 'Max', { 'AlternativeNaming' => true, 'Tables' => tables }, results_dir)
    puts 'EXCHANGE_EXPORT_OK'
    write_status(status_file, "EXCHANGE_EXPORT_OK\n")
  rescue StandardError => e
    puts "ERROR: #{e.message}"
    write_status(status_file, "ERROR: #{e.class}: #{e.message}\n#{e.backtrace.to_a.first(5).join("\n")}\n")
  end
EXCHANGE_RUBY

# Locate ICMExchange.exe of the ICM version that is running this UI script.
def find_exchange_exe
  # WSApplication.version is an internal build number (ICM 2027.2 reports a "44.x" style value),
  # so it cannot be mapped to a year. Use the newest installed ICMExchange.exe instead.
  candidates = Dir.glob('C:/Program Files/Autodesk/InfoWorks ICM*/ICMExchange.exe')
  raise 'ICMExchange.exe not found under C:/Program Files/Autodesk/InfoWorks ICM*' if candidates.empty?
  exe = candidates.max_by { |p| p[/(\d{4})\/ICMExchange\.exe\z/, 1].to_i }
  puts "ICM version #{WSApplication.version}; using #{exe} (installed: #{candidates.inspect})"
  exe
end

def cfg_text(spec)
  lines = ['DBX002']
  CFG_TABLES.each do |table|
    if table == spec[:cfg_table]
      entries = spec[:fields].map { |f| "{#{f},Field,Default,Default,Default,#{f}}" }
      lines << "#{table},{#{entries.join(',')}},"
    else
      lines << "#{table},,"
    end
  end
  lines.join("\n") + "\n"
end

def count_rows(net, table)
  count = 0
  net.row_object_collection(table).each { count += 1 }
  count
end

# ODEC reports a wrong table name in the error file ("Invalid table name for export: X"),
# it does not raise. So: try each ODEC (UI) table name alias, and move on when the error
# file says the name is invalid. Any other content in the error file is raised by the caller.
def odec_export_csv(net, cfg_path, options, odec_tables, out_path)
  error_file = options['Error File']
  tried = []
  odec_tables.each do |odec_table|
    FileUtils.rm_f(error_file)
    begin
      net.odec_export_ex('CSV', cfg_path, options, odec_table, out_path)
    rescue RuntimeError => e
      raise e unless e.message.to_s =~ /invalid (export )?table/i
      tried << odec_table
      next
    end
    text = File.file?(error_file) ? File.read(error_file) : ''
    if text =~ /invalid table name/i
      tried << odec_table
      next
    end
    return odec_table
  end
  raise "ODEC rejected every table name tried: #{tried.join(', ')}"
end

def json_str(value)
  '"' + value.to_s.gsub('\\', '\\\\\\\\').gsub('"', '\\"').gsub(/[\r\n\t]/, ' ') + '"'
end

def fail_export(step, message)
  WSApplication.message_box("Export FAILED at step: #{step}\n\n#{message}\n\nThe export is incomplete.", 'OK', 'Stop', false)
  raise "#{step}: #{message}"
end

# ---------------------------------------------------------------------------
# Guards (nothing is written before these pass)
# ---------------------------------------------------------------------------
raise 'Run from InfoWorks ICM UI (not Exchange).' unless WSApplication.ui?

net = WSApplication.current_network
sim = net.nil? ? nil : net.model_object
if net.nil? || sim.nil? || !sim.respond_to?(:results_gis_export) ||
   !sim.type.to_s.downcase.include?('sim') # WSSimObject#status cannot run from the UI (ICM 2027.2 error)
  WSApplication.message_box(
    "No results object is open.\n\nOpen the simulation results (a successful simulation with results loaded) and run the script again.\nNothing was written.",
    'OK', 'Stop', false
  )
  exit
end

folder = WSApplication.folder_dialog('Select folder for ICM export', false)
if folder.nil? || folder.to_s.strip.empty?
  WSApplication.message_box('No folder selected - export cancelled. Nothing was written.', 'OK', nil, false)
  exit
end

network_dir = File.join(folder, 'network')
results_dir = File.join(folder, 'results')
cfg_dir = File.join(folder, '_cfg')
results_folder = "#{sim.id}_Max" # ICM AlternativeNaming: <model object id>_Max
manifest_path = File.join(folder, 'manifest.json')

targets = EXPORTS.map { |s| File.join(network_dir, s[:csv]) } + [manifest_path, File.join(results_dir, results_folder)]
existing = targets.select { |p| File.exist?(p) }
unless existing.empty?
  answer = WSApplication.message_box(
    "These items already exist and will be overwritten:\n\n#{existing.map { |p| File.basename(p) }.join("\n")}\n\nOverwrite?",
    'YesNo', '?', false
  )
  unless answer.to_s.downcase.start_with?('y')
    WSApplication.message_box('Export cancelled. Nothing was changed.', 'OK', nil, false)
    exit
  end
end

# ---------------------------------------------------------------------------
# Export
# ---------------------------------------------------------------------------
step = 'prepare folders'
files = []
counts = {}
begin
  FileUtils.mkdir_p(network_dir)
  FileUtils.mkdir_p(results_dir)
  FileUtils.mkdir_p(cfg_dir)
  FileUtils.rm_rf(File.join(results_dir, results_folder))

  # 1. Row counts (taken before the export, used in the manifest and the final message)
  step = 'count rows'
  EXPORTS.each { |spec| counts[spec[:key]] = count_rows(net, spec[:count_table]) }

  # 2. Network CSVs: write each cfg to the export folder first, then export with ODEC
  EXPORTS.each do |spec|
    step = "ODEC export #{spec[:csv]}"
    cfg_path = File.join(cfg_dir, spec[:cfg])
    File.open(cfg_path, 'w') { |f| f.write(cfg_text(spec)) }

    error_file = File.join(cfg_dir, "#{spec[:key]}_errors.txt")
    FileUtils.rm_f(error_file)
    options = { 'Error File' => error_file, 'Units Behaviour' => UNITS_BEHAVIOUR, 'Export Selection' => false }

    out_path = File.join(network_dir, spec[:csv])
    odec_table = odec_export_csv(net, cfg_path, options, spec[:odec_tables], out_path)
    puts "Exported #{spec[:csv]} (ODEC table '#{odec_table}', #{counts[spec[:key]]} row(s))"
    if File.file?(error_file) && File.size(error_file) > 0
      raise "ODEC reported errors, see #{error_file}\n#{File.read(error_file)[0, 500]}"
    end
    files << "network/#{spec[:csv]}"
  end

  # 3. Results shapefiles: Max export, simple names (<id>_Max)
  # results_gis_export cannot run from the UI (ICM 2027.2): write the embedded Exchange script to
  # _cfg/, launch it through ICMExchange.exe and wait for it.
  step = 'results GIS export (Max, SHP) via ICMExchange'
  exchange_script = File.join(cfg_dir, EXCHANGE_SCRIPT_NAME)
  File.open(exchange_script, 'w') { |f| f.write(EXCHANGE_SCRIPT_TEXT) }
  exchange_exe = find_exchange_exe
  db_path = WSApplication.current_database.path.to_s
  raise 'could not read the database path from the UI' if db_path.strip.empty?
  # The Exchange script reports through a status file; its stdout came back empty when launched from the UI.
  status_file = File.join(cfg_dir, 'exchange_status.txt')
  FileUtils.rm_f(status_file)
  command = [exchange_exe, exchange_script, db_path, sim.id.to_s, sim.name.to_s, results_dir, status_file]
  puts "Launching: #{command.inspect}"
  output, process = Open3.capture2e(*command) # argument array: no shell, no string interpolation
  puts output
  status_text = File.file?(status_file) ? File.read(status_file) : '(no status file written: the Exchange script did not start or crashed early)'
  unless status_text.start_with?('EXCHANGE_EXPORT_OK')
    raise "ICMExchange did not report success (exit #{process.exitstatus}).\nStatus file:\n#{status_text[0, 800]}\nOutput:\n#{output.to_s[0, 400]}"
  end
  files << "results/#{results_folder}/"

  # 4. Manifest
  step = 'write manifest.json'
  network_name = begin
    net.network_model_object.name
  rescue StandardError
    ''
  end
  manifest = [
    '{',
    "  \"schema\": #{SCHEMA},",
    "  \"script_version\": #{json_str(SCRIPT_VERSION)},",
    "  \"units\": #{json_str(UNITS)},",
    "  \"icm_version\": #{json_str(WSApplication.version)},",
    "  \"network\": #{json_str(network_name)},",
    "  \"run\": #{json_str(sim.name)},",
    "  \"results_folder\": #{json_str(results_folder)},",
    "  \"exported_at\": #{json_str(Time.now.utc.iso8601)},",
    "  \"files\": [#{(files + ['manifest.json']).map { |f| json_str(f) }.join(', ')}],",
    '  "counts": {',
    "    \"nodes\": #{counts[:nodes]},",
    "    \"subcatchments\": #{counts[:subcatchments]},",
    "    \"links\": #{counts[:links]},",
    "    \"land_uses\": #{counts[:land_uses]},",
    "    \"runoff_surfaces\": #{counts[:runoff_surfaces]}",
    '  }',
    '}'
  ].join("\n") + "\n"
  File.open(manifest_path, 'w') { |f| f.write(manifest) }
rescue StandardError => e
  FileUtils.rm_rf(cfg_dir)
  fail_export(step, e.message)
end

FileUtils.rm_rf(cfg_dir)

WSApplication.message_box(
  "Export finished without errors.\n\nFolder:\n#{folder}\n\n" \
  "Nodes: #{counts[:nodes]}\nSubcatchments: #{counts[:subcatchments]}\nLinks: #{counts[:links]}\n" \
  "Land uses: #{counts[:land_uses]}\nRunoff surfaces: #{counts[:runoff_surfaces]}\n\n" \
  "Results folder: results/#{results_folder}",
  'OK', 'Information', false
)

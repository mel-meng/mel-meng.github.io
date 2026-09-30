/*
 * Generic reader for the EPA SWMM5 binary .out format.
 * Adapted from the original prototype and SWMMEnablement/SWMM-Engine.
 * The variable codes follow the official EPA SWMM Output API enums.
 */
(() => {
  const SWMM_MAGIC = 516114522;
  const FLOW_UNIT_LABELS = Object.freeze({ 0: 'CFS', 1: 'GPM', 2: 'MGD', 3: 'CMS', 4: 'LPS', 5: 'MLD' });

  const VARIABLE_CODES = Object.freeze({
    subcatchment: Object.freeze({
      rainfall: 0,
      snowDepth: 1,
      evapLoss: 2,
      infiltrationLoss: 3,
      runoff: 4,
      groundwaterOutflow: 5,
      groundwaterElevation: 6,
      soilMoisture: 7
    }),
    node: Object.freeze({
      depth: 0,
      head: 1,
      volume: 2,
      lateralInflow: 3,
      totalInflow: 4,
      flooding: 5
    }),
    link: Object.freeze({
      flow: 0,
      depth: 1,
      velocity: 2,
      volume: 3,
      capacity: 4
    }),
    system: Object.freeze({
      airTemperature: 0,
      rainfall: 1,
      snowDepth: 2,
      evapInfiltrationLoss: 3,
      runoff: 4,
      dryWeatherInflow: 5,
      groundwaterInflow: 6,
      rdiiInflow: 7,
      directInflow: 8,
      totalLateralInflow: 9,
      flooding: 10,
      outfallFlow: 11,
      storedVolume: 12,
      evaporation: 13
    })
  });

  class SwmmOutError extends Error {
    constructor(code, message) {
      super(message);
      this.name = 'SwmmOutError';
      this.code = code;
    }
  }

  function assertAvailable(view, offset, byteLength, label) {
    if (offset < 0 || offset + byteLength > view.byteLength) {
      throw new SwmmOutError('OUT_TRUNCATED', `SWMM OUT is truncated while reading ${label}.`);
    }
  }

  function readInt32(view, offset, label) {
    assertAvailable(view, offset, 4, label);
    return view.getInt32(offset, true);
  }

  function readString(view, offset) {
    const len = readInt32(view, offset, 'object name length');
    offset += 4;
    if (len < 0) throw new SwmmOutError('OUT_INVALID_NAME', 'SWMM OUT contains an invalid object name length.');
    assertAvailable(view, offset, len, 'object name');
    const bytes = new Uint8Array(view.buffer, view.byteOffset + offset, len);
    let value = '';
    for (let i = 0; i < len; i++) value += String.fromCharCode(bytes[i]);
    return { value, nextOffset: offset + len };
  }

  function readNames(view, count, offset) {
    const names = [];
    for (let i = 0; i < count; i++) {
      const item = readString(view, offset);
      names.push(item.value);
      offset = item.nextOffset;
    }
    return { names, nextOffset: offset };
  }

  function readCodeBlock(view, offset, label) {
    const count = readInt32(view, offset, `${label} variable count`);
    offset += 4;
    if (count < 0) throw new SwmmOutError('OUT_INVALID_VARIABLES', `SWMM OUT contains an invalid ${label} variable count.`);
    const codes = [];
    for (let i = 0; i < count; i++) {
      codes.push(readInt32(view, offset, `${label} variable code`));
      offset += 4;
    }
    return { count, codes, nextOffset: offset };
  }

  function skipProperties(view, offset, objectCount, label) {
    const propertyCount = readInt32(view, offset, `${label} property count`);
    offset += 4;
    if (propertyCount < 0) throw new SwmmOutError('OUT_INVALID_PROPERTIES', `SWMM OUT contains an invalid ${label} property count.`);
    const bytes = propertyCount * 4 + objectCount * propertyCount * 4;
    assertAvailable(view, offset, bytes, `${label} properties`);
    return offset + bytes;
  }

  function normalizeData(data) {
    if (data instanceof Uint8Array) return data;
    if (data instanceof ArrayBuffer) return new Uint8Array(data);
    if (ArrayBuffer.isView(data)) return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    throw new SwmmOutError('OUT_INVALID_INPUT', 'SWMM OUT reader requires an ArrayBuffer or Uint8Array.');
  }

  function parseMetadata(data) {
    const bytes = normalizeData(data);
    if (bytes.byteLength < 28) throw new SwmmOutError('OUT_TOO_SMALL', 'SWMM OUT file is too small to contain a valid footer.');

    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    const tail = bytes.byteLength;
    const namesStartPos = readInt32(view, tail - 24, 'names start position');
    const resultsStartPos = readInt32(view, tail - 16, 'results start position');
    const numPeriods = readInt32(view, tail - 12, 'period count');
    const errorCode = readInt32(view, tail - 8, 'output error code');
    const closingMagic = readInt32(view, tail - 4, 'closing magic number');

    if (readInt32(view, 0, 'opening magic number') !== SWMM_MAGIC || closingMagic !== SWMM_MAGIC) {
      throw new SwmmOutError('OUT_BAD_MAGIC', 'File is not a valid SWMM5 binary OUT file.');
    }
    if (errorCode !== 0) throw new SwmmOutError('OUT_SWMM_ERROR', `SWMM OUT reports engine error code ${errorCode}.`);
    if (numPeriods <= 0) throw new SwmmOutError('OUT_NO_PERIODS', 'SWMM OUT contains no reporting periods.');

    let pos = 4;
    const version = readInt32(view, pos, 'SWMM version'); pos += 4;
    const flowUnitsCode = readInt32(view, pos, 'flow units'); pos += 4;
    const counts = {
      subcatchment: readInt32(view, pos, 'subcatchment count'),
      node: readInt32(view, pos + 4, 'node count'),
      link: readInt32(view, pos + 8, 'link count'),
      pollutant: readInt32(view, pos + 12, 'pollutant count')
    };
    pos += 16;

    pos = namesStartPos;
    const subcatchments = readNames(view, counts.subcatchment, pos); pos = subcatchments.nextOffset;
    const nodes = readNames(view, counts.node, pos); pos = nodes.nextOffset;
    const links = readNames(view, counts.link, pos); pos = links.nextOffset;
    const pollutants = readNames(view, counts.pollutant, pos); pos = pollutants.nextOffset;

    const pollutantUnitsBytes = counts.pollutant * 4;
    assertAvailable(view, pos, pollutantUnitsBytes, 'pollutant units');
    pos += pollutantUnitsBytes;

    pos = skipProperties(view, pos, counts.subcatchment, 'subcatchment');
    pos = skipProperties(view, pos, counts.node, 'node');
    pos = skipProperties(view, pos, counts.link, 'link');

    const subcatchVars = readCodeBlock(view, pos, 'subcatchment'); pos = subcatchVars.nextOffset;
    const nodeVars = readCodeBlock(view, pos, 'node'); pos = nodeVars.nextOffset;
    const linkVars = readCodeBlock(view, pos, 'link'); pos = linkVars.nextOffset;
    const systemVars = readCodeBlock(view, pos, 'system'); pos = systemVars.nextOffset;

    assertAvailable(view, pos, 12, 'start date and report step');
    const startDate = view.getFloat64(pos, true); pos += 8;
    const reportStepSeconds = view.getInt32(pos, true);

    const bytesPerPeriod = 8
      + counts.subcatchment * subcatchVars.count * 4
      + counts.node * nodeVars.count * 4
      + counts.link * linkVars.count * 4
      + systemVars.count * 4;

    assertAvailable(view, resultsStartPos, numPeriods * bytesPerPeriod, 'time-series results');

    return {
      bytes,
      view,
      version,
      flowUnitsCode,
      flowUnits: FLOW_UNIT_LABELS[flowUnitsCode] || 'unknown',
      numPeriods,
      startDate,
      reportStepSeconds,
      resultsStartPos,
      bytesPerPeriod,
      counts,
      names: {
        subcatchment: subcatchments.names,
        node: nodes.names,
        link: links.names,
        pollutant: pollutants.names
      },
      variableCodes: {
        subcatchment: subcatchVars.codes,
        node: nodeVars.codes,
        link: linkVars.codes,
        system: systemVars.codes
      },
      variableCounts: {
        subcatchment: subcatchVars.count,
        node: nodeVars.count,
        link: linkVars.count,
        system: systemVars.count
      }
    };
  }

  function normalizeObjectType(value) {
    const type = String(value || '').toLowerCase();
    if (type === 'subcatch' || type === 'subcatchment') return 'subcatchment';
    if (type === 'node') return 'node';
    if (type === 'link') return 'link';
    if (type === 'system' || type === 'sys') return 'system';
    throw new SwmmOutError('OUT_UNSUPPORTED_OBJECT_TYPE', `Unsupported SWMM output object type: ${value}`);
  }

  function resolveVariableCode(objectType, variable) {
    if (Number.isInteger(variable)) return variable;
    const map = VARIABLE_CODES[objectType];
    if (!map || !Object.prototype.hasOwnProperty.call(map, variable)) {
      throw new SwmmOutError('OUT_UNSUPPORTED_VARIABLE', `Unsupported ${objectType} output variable: ${variable}`);
    }
    return map[variable];
  }

  function valueBaseOffset(meta, objectType, objectIndex) {
    const c = meta.counts;
    const v = meta.variableCounts;
    if (objectType === 'subcatchment') return objectIndex * v.subcatchment * 4;
    if (objectType === 'node') return (c.subcatchment * v.subcatchment + objectIndex * v.node) * 4;
    if (objectType === 'link') return (c.subcatchment * v.subcatchment + c.node * v.node + objectIndex * v.link) * 4;
    return (c.subcatchment * v.subcatchment + c.node * v.node + c.link * v.link) * 4;
  }

  function extractSeries(meta, spec) {
    const objectType = normalizeObjectType(spec.objectType);
    const variableCode = resolveVariableCode(objectType, spec.variable);
    const codes = meta.variableCodes[objectType];
    const variableIndex = codes.indexOf(variableCode);
    if (variableIndex < 0) {
      throw new SwmmOutError('OUT_VARIABLE_NOT_REPORTED', `${objectType} variable ${spec.variable} is not present in this SWMM OUT file.`);
    }

    let objectIndex = 0;
    let objectId = null;
    if (objectType !== 'system') {
      objectId = String(spec.objectId || '');
      objectIndex = meta.names[objectType].indexOf(objectId);
      if (objectIndex < 0) {
        throw new SwmmOutError('OUT_OBJECT_NOT_FOUND', `${objectType} ${objectId || '(missing id)'} was not found in this SWMM OUT file.`);
      }
    }

    const values = new Array(meta.numPeriods);
    const timesHours = new Array(meta.numPeriods);
    const base = valueBaseOffset(meta, objectType, objectIndex);
    for (let p = 0; p < meta.numPeriods; p++) {
      const periodStart = meta.resultsStartPos + p * meta.bytesPerPeriod;
      const valueOffset = periodStart + 8 + base + variableIndex * 4;
      values[p] = meta.view.getFloat32(valueOffset, true);
      timesHours[p] = p * meta.reportStepSeconds / 3600;
    }

    return {
      objectType,
      objectId,
      variable: spec.variable,
      timesHours,
      values
    };
  }

  function createSwmmOutReader(data) {
    const meta = parseMetadata(data);
    return Object.freeze({
      metadata() {
        return {
          version: meta.version,
          flowUnits: meta.flowUnits,
          reportStepSeconds: meta.reportStepSeconds,
          numPeriods: meta.numPeriods,
          counts: { ...meta.counts },
          names: {
            subcatchment: [...meta.names.subcatchment],
            node: [...meta.names.node],
            link: [...meta.names.link]
          }
        };
      },
      getSeries(spec) {
        return extractSeries(meta, spec);
      },
      getOutputs(specs = []) {
        const outputs = {};
        for (const spec of specs) {
          if (!spec || !spec.key) throw new SwmmOutError('OUT_OUTPUT_KEY_REQUIRED', 'Each output request requires a unique key.');
          if (Object.prototype.hasOwnProperty.call(outputs, spec.key)) {
            throw new SwmmOutError('OUT_DUPLICATE_KEY', `Duplicate output key: ${spec.key}`);
          }
          outputs[spec.key] = extractSeries(meta, spec);
        }
        return outputs;
      }
    });
  }

  self.SwmmOut = Object.freeze({
    SwmmOutError,
    VARIABLE_CODES,
    createSwmmOutReader
  });
})();

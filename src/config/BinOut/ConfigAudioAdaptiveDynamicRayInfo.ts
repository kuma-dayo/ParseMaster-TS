import { ConfigDefault } from "../"

export const ConfigAudioAdaptiveDynamicRayInfo: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    rayCastPerFrame: "vint",
    maxRayLen: "float",
    debug: "bool",
    defaultSamplingLevel: "vuint",
    opennessFuncType: "OpennessFuncType",
    labelMap: "map<string,ConfigWwiseString>",
    adaptiveParamMap: "map<vuint,AdaptiveParam>",
    samplingData: "SamplingData",
  },
}
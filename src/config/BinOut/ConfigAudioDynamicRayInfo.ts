import { ConfigDefault } from "../"

export const ConfigAudioDynamicRayInfo: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    rayPerFrame: "vint",
    movingLerpRatio: "float",
    standLerpRatio: "float",
    rayMaxDistance: "float",
    isDebug: "bool",
    rtpcParam: "ConfigWwiseString",
    grassCountRTPC: "ConfigWwiseString",
    coneAngle: "float",
    leftSpaceOpennessRtpcKey: "ConfigWwiseString",
    rightSpaceOpennessRtpcKey: "ConfigWwiseString",
  },
}

import { ConfigDefault } from ".."

export const ConfigAudioArea2DAmbience: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    areaName: "string",
    short_id: "vuint",
    areaPoints: "Vector[]",
    yZeroAnchor: "float",
    areaGroupName: "ConfigWwiseString",
    enableHeightCheck: "bool",
    top: "float",
    bottom: "float",
    isAmbience: "bool",
    enterEvents: "ConfigWwiseString[]",
    leaveEvents: "ConfigWwiseString[]",
    isReverb: "bool",
    auxBusName: "ConfigWwiseString",
    priority: "vint",
    excludeOther: "bool",
    enableChangeStates: "bool",
    enterStates: "AudioStateOp[]",
    leaveStates: "AudioStateOp[]",
  },
}

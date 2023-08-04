import { ConfigDefault } from ".."

export const AudioArea2DVolumeArea: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    volumeName: "string",
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

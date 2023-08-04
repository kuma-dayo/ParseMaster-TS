import { ConfigDefault } from ".."

export const ConfigAISurroundData: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    speedLevel: "vint",
    turnSpeedOverride: "float",
    startDistance: "float",
    surroundRadius: "float",
    turningStates: "string[]",
    detectFrontDistance: "float",
    detectFrontOffsetUp: "float",
    detectFrontOffsetForward: "float",
    amphibious_mode_on: "bool",
  },
}

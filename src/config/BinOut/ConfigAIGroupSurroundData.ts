import { ConfigDefault } from ".."

export const ConfigAIGroupSurroundData: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    speedLevel: "vint",
    turnSpeedOverride: "float",
    startDistanceMin: "float",
    startDistanceMax: "float",
    surroundRadius: "float",
    turningStates: "string[]",
    detectFrontDistance: "float",
    detectFrontOffsetUp: "float",
    cd: "float",
    exitDistanceMax: "float",
    exitDistanceMin: "float",
    clockWiseWeight: "float",
    detectCollisionRadius: "float",
    detectCollisionDistance: "float",
    amphibious_mode_on: "bool",
  },
}

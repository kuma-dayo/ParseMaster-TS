import { ConfigDefault } from ".."

export const ConfigAIFleeData: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    speedLevel: "vint",
    turnSpeedOverride: "float",
    cd: "float",
    triggerDistance: "float",
    fleeAngle: "float",
    fleeNumberMin: "vint",
    fleeNumberMax: "vint",
    fleeDistanceMin: "float",
    fleeDistanceMax: "float",
    turnToTarget: "bool",
    restrictedByDefendArea: "bool",
    expandFleeAngleWhenBlocked: "bool",
    killSelfTime: "float",
    preferWaterPosition: "bool",
    clearThreatTime: "float",
  },
}

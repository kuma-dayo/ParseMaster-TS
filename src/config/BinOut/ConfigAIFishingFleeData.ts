import { ConfigDefault } from ".."

export const ConfigAIFishingFleeData: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    speedLevel: "vint",
    turnSpeedOverride: "float",
    fleeAngle: "float",
    fleeDuration: "float",
    fleeDistanceMin: "float",
    fleeDistanceMax: "float",
    turnToTarget: "bool",
    restrictedByDefendArea: "bool",
    expandFleeAngleWhenBlocked: "bool",
  },
}

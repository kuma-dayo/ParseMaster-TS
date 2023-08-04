import { ConfigDefault } from ".."

export const ConfigAICombatFollowMoveData: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    startDistance: "float",
    stopDistance: "float",
    middleDistance: "float",
    innerDistance: "float",
    speedLevelOuter: "vint",
    speedLevelMiddle: "vint",
    speedLevelInner: "vint",
    startAngle: "float",
    outerAngle: "float",
    turnSpeedOverride: "float",
    turnSpeedOverrideOuter: "float",
    useMeleeSlot: "bool",
    moveOutDampRange: "float",
  },
}

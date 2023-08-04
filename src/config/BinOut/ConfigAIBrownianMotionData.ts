import { ConfigDefault } from ".."

export const ConfigAIBrownianMotionData: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    speedLevel: "vint",
    turnSpeedOverride: "float",
    moveCdMin: "float",
    moveCdMax: "float",
    terrainOffsetMin: "float",
    terrainOffsetMax: "float",
    motionRadius: "float",
    recalcCenterOnLeaveCurrentZone: "bool",
    recalcCenterOnAttachPosChange: "bool",
  },
}

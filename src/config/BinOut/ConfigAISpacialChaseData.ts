import { ConfigDefault } from ".."

export const ConfigAISpacialChaseData: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    speedLevel: "vint",
    chaseStartDistance: "float",
    chaseStopDistance: "float",
    yOffsetMin: "float",
    yOffsetMax: "float",
    segmentDistance: "float",
    canStartRangeByRaycast: "ConfigAIRaycastCondition[]",
  },
}

import { ConfigDefault } from ".."

export const ConfigAISpacialWanderData: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    speedLevel: "vint",
    turnSpeedOverride: "float",
    turningStates: "string[]",
    cdMax: "float",
    cdMin: "float",
    terrainOffsetMin: "float",
    terrainOffsetMax: "float",
    distanceFromBorn: "float",
    distanceFromCurrentMin: "float",
    distanceFromCurrentMax: "float",
    distanceFromEdge: "float",
    coneAngleThreshold: "float",
    coneWeight: "ConfigAISpacialWanderConeWeightData",
  },
}

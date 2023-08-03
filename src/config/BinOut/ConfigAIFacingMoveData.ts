import { ConfigDefault } from "../"

export const ConfigAIFacingMoveData: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    speedLevel: "vint",
    rangeMin: "float",
    rangeMax: "float",
    restTimeMin: "float",
    restTimeMax: "float",
    facingMoveTurnInterval: "float",
    facingMoveMinAvoidanceVelecity: "float",
    obstacleDetectRange: "float",
    facingMoveWeight: "ConfigAIFacingMoveWeight",
    needHasPath: "bool",
    amphibiousMovePermeability: "bool",
    amphibiousWaterToLand: "string",
    amphibiousLandToWater: "string",
    restrictedByDefendArea: "bool",
    ignoreRbdaoutOfZone: "bool",
    distanceToDefendArea: "float",
  },
}

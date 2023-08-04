import { ConfigDefault } from ".."

export const ConfigAISpacialFacingMoveData: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    speedLevel: "vint",
    rangeRadiusMin: "float",
    rangeRadiusMax: "float",
    rangeXZ_YLimitEnable: "bool",
    rangeLimitXZ_Y: "ConfigAIRangeXZ_Y",
    restTimeMin: "float",
    restTimeMax: "float",
    facingMoveTurnInterval: "float",
    facingMoveMinAvoidanceVelecity: "float",
    obstacleDetectRange: "float",
    obstacleUpRange: "float",
    obstacleMaxAngle: "float",
    spacialFacingMoveProbability: "ConfigAISpacialFacingMoveProbability",
    canStartRangeByRaycast: "ConfigAIRaycastCondition[]",
    turn_speed_override_in_run: "float",
    turn_speed_override_in_idle: "float",
    use_aniamtor_velocity_in_idle: "bool",
  },
}

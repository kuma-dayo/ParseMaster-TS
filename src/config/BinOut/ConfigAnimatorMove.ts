import { ConfigDefault } from ".."

export const ConfigAnimatorMove: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigMove",
  Fields: {
    initWithGroundHitCheck: "bool",
    smoothedSpeed: "ConfigMoveSmoothedSpeed",
    moveOnGround: "bool",
    moveOnWater: "bool",
    moveOnWaterDepth: "float",
    raycasts: "ConfigRaycast[]",
    deepWaterLevel: "float",
    facingMove: "FacingMoveType",
    airFacingMove: "FacingMoveType",
    monsterSizeType: "MonsterSizeType",
    positionModifyState: "PositionModifyState",
    positionModifyStateMap: "map<vuint,PositionModifyState>",
    destroyRockWhenInit: "bool",
    yawSpeedRatio: "float",
    velocityRatio: "float",
    launchStates: "string[]",
    landStates: "string[]",
    positionModifyExtra: "bool",
  },
}

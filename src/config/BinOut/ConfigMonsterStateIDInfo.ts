import { ConfigDefault } from "../"

export const ConfigMonsterStateIDInfo: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigNormalStateIDInfo",
  Fields: {
    enableBoneFollowMove: "bool",
    canSteer: "bool",
    autoSteer: "bool",
    followAnimRotation: "bool",
    gravityAdjustScale: "float",
    forceSetAirMove: "bool",
    remoteForceCloseAirMove: "bool",
    remoteForceUseAnimatorVel: "bool",
    blendMove: "BlendMoveType",
    blendSmoothSpeed: "float",
    airMoveFollowAnimation: "bool",
  },
}

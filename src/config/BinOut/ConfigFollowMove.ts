import { ConfigDefault } from "../"

export const ConfigFollowMove: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigMove",
  Fields: {
    target: "FollowTarget",
    groupTargetInstanceId: "vuint",
    followTargetEx: "ConfigMoveFollowTarget",
    attachPoint: "string",
    followRotation: "bool",
    offset: "Vector",
    forward: "Vector",
    followOwnerInvisible: "bool",
    fixedY: "float",
    ignoreCollision: "ConfigIgnoreCollision",
    moveDisableCollision: "ConfigMoveDisableCollision",
    moveAudio: "ConfigMoveAudio",
    syncTransToServer: "bool",
    syncInterval: "float",
    handleInLateTick: "bool",
    followPositionSmoothedDampTime: "float",
    followRotationSmoothedDampTime: "float",
    followInFixedUpdate: "bool",
    fixedFollowPosMaxSpeed: "float",
    fixedFollowRotMaxSpeed: "float",
  },
}
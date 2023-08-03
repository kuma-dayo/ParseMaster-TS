import { ConfigDefault } from "../"

export const ConfigWaypoint: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    pos: "Vector",
    waitTime: "float",
    moveAngularSpeed: "float",
    waitAngularSpeed: "float",
    moveRotateRound: "float",
    waitRotateRound: "float",
    stopWaitRotate: "bool",
    speedLevel: "vint",
    targetVelocity: "float",
    hasReachEvent: "bool",
    rotAngleMoveSpeed: "float",
    rotAngleWaitSpeed: "float",
    rotAngleSameStop: "bool",
    rotRoundReachDir: "Vector",
    rotRoundReachRounds: "vint",
    rotRoundLeaveDir: "Vector",
    rotRoundWaitRounds: "vint",
    reachStop: "bool",
  },
}

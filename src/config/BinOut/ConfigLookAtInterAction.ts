import { ConfigDefault } from "../"

export const ConfigLookAtInterAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    enableHead: "bool",
    useTargetPos: "bool",
    enableAbsolute: "bool",
    targetOffset: "Vector",
    targetPosition: "Vector",
    headRotateVec: "Vector",
    enableBody: "bool",
    bodyAngle: "float",
    headTurnTime: "float",
    bodyTurnTime: "float",
    targetNpcAlias: "string",
    lookAtTargetType: "LookAtTargetType",
    targetNpcRotateVecPlus: "Vector",
    openBackProtect: "bool",
    backProtectAngle: "float",
  },
}

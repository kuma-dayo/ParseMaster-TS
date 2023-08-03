import { ConfigDefault } from "../"

export const ConfigLookAtEyeCtrlInterAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    clearAll: "bool",
    useTargetPos: "bool",
    targetPosition: "Vector",
    eyeRotateVecLeft: "Vector",
    eyeRotateVecRight: "Vector",
    eyeScaleX: "float",
    eyeScaleZ: "float",
    turnTime: "float",
    targetNpcAlias: "string",
    targetPoint: "string",
  },
}
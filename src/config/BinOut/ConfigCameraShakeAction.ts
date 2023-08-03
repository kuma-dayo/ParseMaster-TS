import { ConfigDefault } from "../"

export const ConfigCameraShakeAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    shakeRange: "float",
    shakeTime: "float",
    shakeDinstance: "float",
    shakeDir: "Vector",
  },
}

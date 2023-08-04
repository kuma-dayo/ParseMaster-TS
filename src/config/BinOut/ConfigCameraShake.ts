import { ConfigDefault } from ".."

export const ConfigCameraShake: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    shakeType: "CameraShakeType",
    shakeRange: "float",
    shakeTime: "float",
    shakeDistance: "float",
    shakeDir: "Vector",
    extension: "ConfigCameraShakeExt",
  },
}

import { ConfigDefault } from ".."

export const ConfigCameraSplineInterAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    cameraPath: "ConfigCameraSplineCameraPath",
    targetPath: "ConfigCameraSplineTargetPath",
    targetDuration: "float",
    use_dissolve: "bool",
    dissolve_time: "float",
  },
}

import { ConfigDefault } from "../"

export const ConfigCameraSplineCameraPath: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigCameraSplineBasePath",
  Fields: {
    pathPoints: "ConfigCameraSplineBasePoint[]",
    fovCurve: "ConfigAnimationCurve",
  },
}
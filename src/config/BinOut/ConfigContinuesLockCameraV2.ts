import { ConfigDefault } from "../"

export const ConfigContinuesLockCameraV2: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigSpecialCamera",
  Fields: {
    lockPoint: "string",
    forwardMaxAngle: "float",
    forwardMaxAngleExtra: "float",
    forwardAdjustMinSpeed: "float",
    forwardAdjustMaxSpeed: "float",
    enemyWeight: "float",
    zoomMin: "float",
    zoomMax: "float",
    enemyPosTolerateRange: "float",
    enableHandleInput: "bool",
    springLerpInterval: "float",
  },
}

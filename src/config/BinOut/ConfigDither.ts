import { ConfigDefault } from "../"

export const ConfigDither: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    showDitherDuration: "float",
    startDitherAction: "ConfigDitherByStartDitherAction",
    betweenCameraAndAvatar: "ConfigDitherByBetweenCameraAndAvatar",
    normalBetweenCamera: "ConfigDitherByNormalBetweenCamera",
    hideEffectWhenDither: "bool",
  },
}

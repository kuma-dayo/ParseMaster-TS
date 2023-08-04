import { ConfigDefault } from ".."

export const ConfigVideoPlayAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    videoName: "string",
    subtitleId: "vuint",
    canSkip: "bool",
    bgColor: "ColorVector",
    fadeInTime: "float",
    fadeOutTime: "float",
  },
}

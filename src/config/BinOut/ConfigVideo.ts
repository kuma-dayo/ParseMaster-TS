import { ConfigDefault } from ".."

export const ConfigVideo: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    heroDiff: "bool",
    videoName: "string",
    videoNameOther: "string",
    subtitleId: "vuint",
    subtitleIdOther: "vuint",
    canSkip: "bool",
    bgColor: "ColorVector",
    fadeInDuration: "float",
    fadeOutDuration: "float",
    videoScreenAdaptation: "vuint",
  },
}

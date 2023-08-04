import { ConfigDefault } from ".."

export const ConfigEmotionInterAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    emotionName: "string",
    emotionTransitionTime: "float",
    lookAtOffset: "Vector",
    blinkEnabled: "bool",
    blinkMinGap: "float",
    blinkMaxGap: "float",
    blinkDuration: "float",
  },
}

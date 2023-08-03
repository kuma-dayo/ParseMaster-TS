import { ConfigDefault } from "../"

export const ConfigSpeechBubbleAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseInterAction",
  Fields: {
    dialogID: "vuint",
    priority: "vuint",
    holdOn: "bool",
    tryStop: "bool",
  },
}

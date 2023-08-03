import { ConfigDefault } from "../"

export const ConfigGuideDelayDoAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideAction",
  Fields: {
    delayTime: "float",
    actions: "ConfigGuideAction[]",
  },
}

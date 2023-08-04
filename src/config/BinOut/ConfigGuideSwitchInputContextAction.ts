import { ConfigDefault } from ".."

export const ConfigGuideSwitchInputContextAction: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigGuideAction",
  Fields: {
    inputEventList: "string[]",
    contextEventList: "string[]",
    inputPriorityList: "vint[]",
  },
}

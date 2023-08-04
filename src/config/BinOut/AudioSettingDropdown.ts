import { ConfigDefault } from ".."

export const AudioSettingDropdown: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    stateGroup: "ConfigWwiseString",
    settingName: "string",
    settingItems: "string[]",
    indexToStateMap: "map<vint,ConfigWwiseString>",
  },
}

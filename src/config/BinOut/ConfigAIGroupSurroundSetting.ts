import { ConfigDefault } from ".."

export const ConfigAIGroupSurroundSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAIGroupSurroundData",
    specification: "map<vint,ConfigAIGroupSurroundData>",
  },
}

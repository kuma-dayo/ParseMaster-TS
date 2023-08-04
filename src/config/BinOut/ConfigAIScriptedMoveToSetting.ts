import { ConfigDefault } from ".."

export const ConfigAIScriptedMoveToSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAIScriptedMoveToData",
    specification: "map<vint,ConfigAIScriptedMoveToData>",
  },
}

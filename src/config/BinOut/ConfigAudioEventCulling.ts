import { ConfigDefault } from ".."

export const ConfigAudioEventCulling: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    ruleMap: "map<string,ConfigAudioEventCullingRuleBase[]>",
    globalRules: "ConfigAudioEventCullingRuleBase[]",
  },
}

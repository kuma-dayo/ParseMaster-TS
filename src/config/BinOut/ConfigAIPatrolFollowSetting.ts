import { ConfigDefault } from ".."

export const ConfigAIPatrolFollowSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAIPatrolFollowData",
    specification: "map<vint,ConfigAIPatrolFollowData>",
  },
}

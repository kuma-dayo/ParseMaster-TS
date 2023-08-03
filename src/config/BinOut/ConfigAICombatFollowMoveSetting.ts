import { ConfigDefault } from "../"

export const ConfigAICombatFollowMoveSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAICombatFollowMoveData",
    specification: "map<vint,ConfigAICombatFollowMoveData>",
  },
}

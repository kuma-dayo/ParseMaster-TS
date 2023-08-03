import { ConfigDefault } from "../"

export const ConfigAICombatFixedMoveSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAICombatFixedMoveData",
    specification: "map<vint,ConfigAICombatFixedMoveData>",
  },
}

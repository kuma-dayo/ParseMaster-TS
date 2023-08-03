import { ConfigDefault } from "../"

export const ConfigAICrabMoveSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAICrabMoveData",
    specification: "map<vint,ConfigAICrabMoveData>",
  },
}

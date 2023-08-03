import { ConfigDefault } from "../"

export const ConfigAIFacingMoveSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAIFacingMoveData",
    specification: "map<vint,ConfigAIFacingMoveData>",
  },
}

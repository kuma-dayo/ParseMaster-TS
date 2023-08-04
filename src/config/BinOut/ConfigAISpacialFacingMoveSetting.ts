import { ConfigDefault } from ".."

export const ConfigAISpacialFacingMoveSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAISpacialFacingMoveData",
    specification: "map<vint,ConfigAISpacialFacingMoveData>",
  },
}

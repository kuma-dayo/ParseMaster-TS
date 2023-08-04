import { ConfigDefault } from ".."

export const ConfigAIReturnToBornPosSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAIReturnToBornPosData",
    specification: "map<vint,ConfigAIReturnToBornPosData>",
  },
}

import { ConfigDefault } from ".."

export const ConfigAIMeleeChargeSetting: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAITacticBaseSetting",
  Fields: {
    defaultSetting: "ConfigAIMeleeChargeData",
    specification: "map<vint,ConfigAIMeleeChargeData>",
  },
}

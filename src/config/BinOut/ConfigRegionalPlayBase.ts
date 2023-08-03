import { ConfigDefault } from "../"

export const ConfigRegionalPlayBase: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    playType: "RegionalPlayType",
    bindScene: "vuint",
    abilityGroupNameList: "string[]",
    isTeam: "bool",
    varList: "ConfigRegionalPlayVarData[]",
  },
}
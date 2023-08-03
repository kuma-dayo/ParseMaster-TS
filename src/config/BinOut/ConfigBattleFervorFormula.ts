import { ConfigDefault } from "../"

export const ConfigBattleFervorFormula: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    groups: "ConfigBattleFervorGroup[]",
    battleFervorMinValue: "float",
    battleFervorMaxValue: "float",
    battleFervorBaseValue: "float",
    lerpInterval: "float",
    lerpCoefficient: "float",
  },
}
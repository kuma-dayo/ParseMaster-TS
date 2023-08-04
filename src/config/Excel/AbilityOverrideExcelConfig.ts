import { ConfigDefault } from ".."

export const AbilityOverrideExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    abilityName: "string",
    abilitySpecialParamConfig: "AbilityOverrideParamConfig[]",
    paramNameList: "string[]",
    paramValueList: "float[]",
    resetAbilitySpecial: "bool",
  },
}

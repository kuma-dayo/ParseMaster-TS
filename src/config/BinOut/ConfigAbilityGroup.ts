import { ConfigDefault } from "../"

export const ConfigAbilityGroup: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    abilityGroupSourceType: "AbilityGroupSourceType",
    abilityGroupTargetType: "AbilityGroupTargetType",
    abilityGroupTargetIDList: "vuint[]",
    targetAbilities: "ConfigEntityAbilityEntry[]",
    targetTalents: "ConfigDynamicTalent[]",
  },
}

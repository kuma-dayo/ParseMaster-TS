import { ConfigDefault } from "../"

export const ModifyDamageCountMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ModifyDamageMixin",
  Fields: {
    maxModifyCount: "DynamicFloat",
    countPredicates: "ConfigAbilityPredicate[]",
    isIgnoreAttenuation: "bool",
    successActions: "ConfigAbilityAction[]",
    maxCountActions: "ConfigAbilityAction[]",
  },
}

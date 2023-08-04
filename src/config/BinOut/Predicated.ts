import { ConfigDefault } from ".."

export const Predicated: ConfigDefault = {
  attribute: [],
  baseClass: "BaseUtilityAction",
  Fields: {
    targetPredicates: "ConfigAbilityPredicate[]",
    successActions: "ConfigAbilityAction[]",
    failActions: "ConfigAbilityAction[]",
  },
}

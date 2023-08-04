import { ConfigDefault } from ".."

export const DoActionByEntityKillMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    predicates: "ConfigAbilityPredicate[]",
    actionQueue: "ConfigAbilityAction[]",
  },
}

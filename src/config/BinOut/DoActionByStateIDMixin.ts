import { ConfigDefault } from ".."

export const DoActionByStateIDMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    stateIDs: "string[]",
    enterPredicates: "ConfigAbilityPredicate[]",
    exitPredicates: "ConfigAbilityPredicate[]",
    enterActions: "ConfigAbilityAction[]",
    exitActions: "ConfigAbilityAction[]",
  },
}

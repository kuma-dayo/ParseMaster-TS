import { ConfigDefault } from "../"

export const DoActionByAnimatorStateIDMixin: ConfigDefault = {
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

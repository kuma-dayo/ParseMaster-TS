import { ConfigDefault } from ".."

export const AttachToStateIDMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    stateIDs: "string[]",
    modifierName: "string",
    target: "AbilityTargetting",
    predicates: "ConfigAbilityPredicate[]",
    isCheckOnAttach: "bool",
    animatorWhiteList: "string[]",
    animatorBlackList: "string[]",
  },
}

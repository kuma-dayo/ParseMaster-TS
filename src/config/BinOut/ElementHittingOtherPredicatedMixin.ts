import { ConfigDefault } from ".."

export const ElementHittingOtherPredicatedMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    prePredicates: "ConfigAbilityPredicate[]",
    elementBatchPredicateds: "ElementBatchPredicated[]",
  },
}

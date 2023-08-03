import { ConfigDefault } from "../"

export const SingleTarget: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    target: "AbilityTargetting",
    otherTargets: "SelectTargets",
    targetPredicates: "ConfigAbilityPredicate[]",
  },
}

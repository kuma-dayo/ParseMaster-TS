import { ConfigDefault } from "../"

export const EffectChangeAlphaMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    target: "AbilityTargetting",
    otherTargets: "SelectTargets",
    predicates: "ConfigAbilityPredicate[]",
    startDuration: "float",
    endDuration: "float",
  },
}

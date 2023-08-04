import { ConfigDefault } from ".."

export const ConnectLineMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    RepeaterModifier: "string",
    CollectorModifier: "string",
    CollectorGlobalvalueKey: "string",
    otherTargets: "SelectTargets",
    predicates: "ConfigAbilityPredicate[]",
    predicatesForeach: "ConfigAbilityPredicate[]",
  },
}

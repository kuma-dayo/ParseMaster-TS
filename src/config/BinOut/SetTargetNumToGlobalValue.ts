import { ConfigDefault } from ".."

export const SetTargetNumToGlobalValue: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    srcTarget: "AbilityTargetting",
    srcOtherTargets: "SelectTargets",
    srcPredicates: "ConfigAbilityPredicate[]",
    dstTarget: "AbilityTargetting",
    dstOtherTargets: "SelectTargets",
    dstPredicates: "ConfigAbilityPredicate[]",
    key: "string",
    useLimitRange: "bool",
    maxValue: "DynamicFloat",
    minValue: "DynamicFloat",
  },
}

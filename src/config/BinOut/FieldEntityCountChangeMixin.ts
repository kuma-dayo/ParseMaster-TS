import { ConfigDefault } from "../"

export const FieldEntityCountChangeMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    campTargetType: "TargetType",
    ignoreCamp: "bool",
    forceTriggerWhenChangeAuthority: "bool",
    targetPredicates: "ConfigAbilityPredicate[]",
    onFieldEnter: "ConfigAbilityAction[]",
    onFieldExit: "ConfigAbilityAction[]",
    replaceOnAddedInTick: "bool",
    simpleCountGlobaValueKey: "string",
    simpleCountUseLimitRange: "bool",
    simpleCountMaxValue: "DynamicFloat",
    simpleCountMinValue: "DynamicFloat",
  },
}

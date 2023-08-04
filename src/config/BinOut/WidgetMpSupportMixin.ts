import { ConfigDefault } from ".."

export const WidgetMpSupportMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    succActions: "ConfigAbilityAction[]",
    failActions: "ConfigAbilityAction[]",
    predicates: "ConfigAbilityPredicate[]",
  },
}

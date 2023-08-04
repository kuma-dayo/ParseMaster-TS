import { ConfigDefault } from ".."

export const AttachModifierToPredicateMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    type: "AvatarStageType",
    onEvent: "OnEventType",
    predicates: "ConfigAbilityPredicate[]",
    modifierName: "string",
    onAbilityStateAdded: "ConfigAbilityStateToActions[]",
    onAbilityStateRemoved: "ConfigAbilityStateToActions[]",
  },
}

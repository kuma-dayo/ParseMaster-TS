import { ConfigDefault } from "../"

export const DigAttachModifierToTargetDistanceMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    targetID: "vuint",
    distance: "float",
    unfoundEffectPattern: "string",
    foundEffectPattern: "string",
    unfoundActionArray: "ConfigAbilityAction[]",
    foundActionArray: "ConfigAbilityAction[]",
  },
}

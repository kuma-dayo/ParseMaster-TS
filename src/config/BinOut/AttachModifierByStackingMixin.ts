import { ConfigDefault } from ".."

export const AttachModifierByStackingMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    actionQueue: "ConfigAbilityAction[]",
    stackingModifier: "string",
  },
}

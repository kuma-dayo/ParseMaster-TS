import { ConfigDefault } from "../"

export const AttachActionToModifierMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    onAdded: "ConfigAbilityAction[]",
    onRemoved: "ConfigAbilityAction[]",
  },
}

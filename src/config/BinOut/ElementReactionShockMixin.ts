import { ConfigDefault } from ".."

export const ElementReactionShockMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    thinkInterval: "float",
    campGlobalKey: "string",
    attackAction: "ConfigAbilityAction",
    conductAction: "ConfigAbilityAction",
  },
}

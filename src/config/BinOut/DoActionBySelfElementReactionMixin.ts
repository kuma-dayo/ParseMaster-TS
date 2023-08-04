import { ConfigDefault } from ".."

export const DoActionBySelfElementReactionMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    reactionTypes: "ElementReactionType[]",
    actionQueue: "ConfigAbilityAction[]",
  },
}

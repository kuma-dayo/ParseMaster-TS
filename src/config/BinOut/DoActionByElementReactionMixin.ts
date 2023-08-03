import { ConfigDefault } from "../"

export const DoActionByElementReactionMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    range: "float",
    entityTypes: "EntityType[]",
    reactionTypes: "ElementReactionType[]",
    actions: "ConfigAbilityAction[]",
  },
}

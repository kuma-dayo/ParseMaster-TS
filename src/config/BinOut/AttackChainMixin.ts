import { ConfigDefault } from "../"

export const AttackChainMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    ignoreElementReactionType: "bool",
    reactionTypes: "ElementReactionType[]",
    ignoreAttackTag: "bool",
    attackTags: "string[]",
    effectName: "string",
    effectAttachPoint: "string",
    lineRange: "DynamicFloat",
    attackChainReceiverKey: "string",
    cd: "DynamicFloat",
    actionQueue: "ConfigAbilityAction[]",
    predicates: "ConfigAbilityPredicate[]",
  },
}

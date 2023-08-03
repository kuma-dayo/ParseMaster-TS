import { ConfigDefault } from "../"

export const AttackChainReceiverMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    cd: "DynamicFloat",
    actionQueue: "ConfigAbilityAction[]",
    predicates: "ConfigAbilityPredicate[]",
    attackerPredicates: "ConfigAbilityPredicate[]",
    attackChainReceiverKey: "string",
  },
}

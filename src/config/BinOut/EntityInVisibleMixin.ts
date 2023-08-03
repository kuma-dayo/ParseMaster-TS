import { ConfigDefault } from "../"

export const EntityInVisibleMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    predicates: "ConfigAbilityPredicate[]",
    reason: "AbilityEntityVisibleReason",
    disableAudio: "bool",
  },
}

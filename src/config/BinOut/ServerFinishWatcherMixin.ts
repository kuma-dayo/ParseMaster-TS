import { ConfigDefault } from "../"

export const ServerFinishWatcherMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    watcherId: "vuint",
    predicates: "ConfigAbilityPredicate[]",
  },
}

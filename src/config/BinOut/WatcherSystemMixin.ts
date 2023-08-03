import { ConfigDefault } from "../"

export const WatcherSystemMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    watcherId: "vuint",
    mixinType: "WatcherSystemMixinType",
    listenEntityType: "WatcherSystemListenType",
    listenStateId: "string",
    predicates: "ConfigAbilityPredicate[]",
  },
}

import { ConfigDefault } from ".."

export const GlobalWatcherConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "WatcherConfig",
  Fields: {
    predicateConfigs: "WatcherPredicateConfig[]",
    id: "vuint",
    triggerConfig: "GlobalWatcherTriggerConfig",
    progress: "vuint",
    isDisuse: "bool",
  },
}

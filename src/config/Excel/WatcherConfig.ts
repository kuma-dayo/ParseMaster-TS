import { ConfigDefault } from ".."

export const WatcherConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    triggerConfig: "WatcherTriggerConfig",
    progress: "vuint",
    isDisuse: "bool",
  },
}

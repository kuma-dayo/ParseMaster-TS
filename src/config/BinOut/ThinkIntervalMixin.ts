import { ConfigDefault } from "../"

export const ThinkIntervalMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    thinkInterval: "DynamicFloat",
    thinkIntervalIgnoreTimeScale: "bool",
    tickThinkIntervalAfterDie: "bool",
    onThinkInterval: "ConfigAbilityAction[]",
  },
}

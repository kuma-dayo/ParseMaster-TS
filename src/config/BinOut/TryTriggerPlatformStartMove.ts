import { ConfigDefault } from ".."

export const TryTriggerPlatformStartMove: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    detectHeight: "float",
    detectWidth: "float",
    enableRotationOffset: "bool",
    failActions: "ConfigAbilityAction[]",
    forceReset: "bool",
    forceTrigger: "bool",
  },
}

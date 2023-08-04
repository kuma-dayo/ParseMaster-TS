import { ConfigDefault } from ".."

export const ClusterTriggerMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    born: "ConfigBornType",
    configID: "vuint",
    radius: "float",
    duration: "float",
    valueSteps: "DynamicFloat[]",
    actionQueue: "ConfigAbilityAction[]",
  },
}

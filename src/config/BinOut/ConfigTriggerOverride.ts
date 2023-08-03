import { ConfigDefault } from "../"

export const ConfigTriggerOverride: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    overrideTriggerFlag: "bool",
    triggerFlag: "TriggerFlag",
    overrideCheckCount: "bool",
    checkCount: "vint",
    overrideTriggerInterval: "bool",
    triggerInterval: "float",
    rawShape: "ConfigBaseShape",
    overrideUseLocalTriggerLogic: "bool",
    useLocalTriggerLogic: "bool",
    localTriggerMeta: "ConfigLocalTriggerMeta",
  },
}
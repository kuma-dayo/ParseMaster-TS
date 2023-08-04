import { ConfigDefault } from ".."

export const ConfigLocalTrigger: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigLocalEntity",
  Fields: {
    triggerFlag: "TriggerFlag",
    shape: "ConfigBaseShape",
    checkCount: "vint",
    triggerInterval: "float",
    vectorParam: "Vector",
    floatParam: "float",
    stringParam: "string",
  },
}

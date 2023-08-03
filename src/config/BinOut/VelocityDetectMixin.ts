import { ConfigDefault } from "../"

export const VelocityDetectMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    minSpeed: "float",
    maxSpeed: "float",
    detectOnStart: "bool",
    onPoseedge: "ConfigAbilityAction[]",
    onNegedge: "ConfigAbilityAction[]",
  },
}
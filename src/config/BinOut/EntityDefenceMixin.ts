import { ConfigDefault } from "../"

export const EntityDefenceMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    stateIDs: "string[]",
    defendTriggerID: "string",
    defendAngle: "float",
    defendProbability: "DynamicFloat",
    defendProbabilityDelta: "DynamicFloat",
    defendTimeInterval: "DynamicFloat",
    alwaysRecover: "bool",
    defendCountInterval: "DynamicInt",
    canDefenceWhileEndureFull: "bool",
  },
}
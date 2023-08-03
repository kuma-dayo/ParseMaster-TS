import { ConfigDefault } from "../"

export const AttachToAbilityStateMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    abilityStates: "AbilityState[]",
    reject: "bool",
    modifierName: "string",
  },
}
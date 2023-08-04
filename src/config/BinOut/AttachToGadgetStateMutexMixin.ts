import { ConfigDefault } from ".."

export const AttachToGadgetStateMutexMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    gadgetStates: "vint[]",
    modifierNames: "string[][]",
  },
}

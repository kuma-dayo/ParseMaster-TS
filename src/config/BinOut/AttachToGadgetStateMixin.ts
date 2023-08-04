import { ConfigDefault } from ".."

export const AttachToGadgetStateMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    gadgetState: "vint",
    modifierName: "string",
  },
}

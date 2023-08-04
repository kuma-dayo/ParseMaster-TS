import { ConfigDefault } from ".."

export const DoActionByCreateGadgetMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    type: "CreateGadgetMixinType",
    actionQueue: "ConfigAbilityAction[]",
  },
}

import { ConfigDefault } from ".."

export const ExtendLifetimeByPickedGadgetMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    pickedConfigIDs: "vuint[]",
    extendLifeTime: "DynamicFloat",
    maxExtendLifeTime: "DynamicFloat",
  },
}

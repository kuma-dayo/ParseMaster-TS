import { ConfigDefault } from ".."

export const DoActionByGainCrystalSeedMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    elementTypes: "ElementType[]",
    actions: "ConfigAbilityAction[]",
  },
}

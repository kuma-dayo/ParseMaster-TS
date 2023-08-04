import { ConfigDefault } from ".."

export const ByHasShield: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityPredicate",
  Fields: {
    type: "HasShieldType",
    usePotentShield: "bool",
    potentShieldType: "ElementType",
  },
}

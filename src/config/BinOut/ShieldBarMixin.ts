import { ConfigDefault } from "../"

export const ShieldBarMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    onShieldBroken: "ConfigAbilityAction[]",
    revert: "bool",
    showDamageText: "string",
    useMutiPlayerFixData: "bool",
    skipInitAnim: "bool",
    barElementType: "ElementType",
  },
}

import { ConfigDefault } from "../"

export const ElementShieldMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    elementType: "ElementType",
    showDamageText: "string",
    shieldAngle: "DynamicFloat",
    shieldHPRatio: "DynamicFloat",
    shieldHP: "DynamicFloat",
    damageRatio: "DynamicFloat",
    onShieldBroken: "ConfigAbilityAction[]",
    onShieldSuccess: "ConfigAbilityAction[]",
    onShieldFailed: "ConfigAbilityAction[]",
    useMutiPlayerFixData: "bool",
    updateShieldByMaxHp: "bool",
  },
}
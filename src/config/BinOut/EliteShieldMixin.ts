import { ConfigDefault } from ".."

export const EliteShieldMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    shieldType: "string",
    shieldAngle: "DynamicFloat",
    shieldHPRatio: "DynamicFloat",
    shieldHP: "DynamicFloat",
    costShieldRatioName: "string",
    showDamageText: "string",
    onShieldBroken: "ConfigAbilityAction[]",
    amountByGetDamage: "DynamicFloat",
    targetMuteHitEffect: "bool",
    infiniteShield: "bool",
    healLimitedByCasterMaxHPRatio: "DynamicFloat",
  },
}

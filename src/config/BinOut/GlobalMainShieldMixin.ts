import { ConfigDefault } from "../"

export const GlobalMainShieldMixin: ConfigDefault = {
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
    effectPattern: "string",
    childShieldModifierName: "string",
    targetMuteHitEffect: "bool",
    infiniteShield: "bool",
    healLimitedByCasterMaxHPRatio: "DynamicFloat",
    healLimitedByLocalCreatureMaxHPRatio: "DynamicFloat",
  },
}

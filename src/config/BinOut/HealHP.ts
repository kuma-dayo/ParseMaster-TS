import { ConfigDefault } from ".."

export const HealHP: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    amount: "DynamicFloat",
    amountByCasterMaxHPRatio: "DynamicFloat",
    amountByTargetMaxHPRatio: "DynamicFloat",
    amountByTargetCurrentHPRatio: "DynamicFloat",
    amountByCasterAttackRatio: "DynamicFloat",
    muteHealEffect: "bool",
    healRatio: "float",
    ignoreAbilityProperty: "bool",
  },
}

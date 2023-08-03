import { ConfigDefault } from "../"

export const LoseHP: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    amount: "DynamicFloat",
    amountByCasterMaxHPRatio: "DynamicFloat",
    amountByTargetMaxHPRatio: "DynamicFloat",
    amountByTargetCurrentHPRatio: "DynamicFloat",
    amountByCasterAttackRatio: "DynamicFloat",
    limboByTargetMaxHPRatio: "DynamicFloat",
    lethal: "bool",
    enableInvincible: "bool",
    enableLockHP: "bool",
    disableWhenLoading: "bool",
    useMeta: "bool",
  },
}
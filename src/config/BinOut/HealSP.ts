import { ConfigDefault } from "../"

export const HealSP: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    amount: "DynamicFloat",
    amountByCasterMaxSPRatio: "DynamicFloat",
    amountByTargetMaxSPRatio: "DynamicFloat",
    amountByCurrentComboRatio: "DynamicFloat",
    muteHealEffect: "bool",
    healRatio: "float",
  },
}

import { ConfigDefault } from "../"

export const ChangeShieldValue: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    shieldHPRatio: "DynamicFloat",
    shieldHP: "DynamicFloat",
    maxShieldByHPRatio: "DynamicFloat",
    maxShieldHP: "DynamicFloat",
    modifierName: "string",
    refreshTime: "bool",
  },
}

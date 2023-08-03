import { ConfigDefault } from "../"

export const AttackByEnergy: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    energy: "DynamicFloat",
    overDamageRatio: "float",
    overDamageMaxHPRatio: "float",
  },
}

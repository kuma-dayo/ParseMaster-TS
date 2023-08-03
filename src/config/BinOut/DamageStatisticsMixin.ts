import { ConfigDefault } from "../"

export const DamageStatisticsMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    isMinDamage: "bool",
    damageElementTypeKey: "string",
    damageAmountKey: "string",
    onExitActions: "ConfigAbilityAction[]",
  },
}

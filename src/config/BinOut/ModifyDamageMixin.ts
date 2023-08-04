import { ConfigDefault } from ".."

export const ModifyDamageMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    animEventNames: "string[]",
    attackTags: "string[]",
    attackType: "AttackType",
    ignoreEventInfo: "bool",
    damagePercentage: "DynamicFloat",
    damagePercentageRatio: "DynamicFloat",
    damageExtra: "DynamicFloat",
    bonusCritical: "DynamicFloat",
    bonusCriticalHurt: "DynamicFloat",
    elementTypeModifier: "ElementTypeModifier",
    predicates: "ConfigAbilityPredicate[]",
    trueDamage: "bool",
    defenseIgnoreRatio: "DynamicFloat",
    defenseIgnoreDelta: "DynamicFloat",
  },
}

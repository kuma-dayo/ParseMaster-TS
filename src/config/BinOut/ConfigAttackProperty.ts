import { ConfigDefault } from "../"

export const ConfigAttackProperty: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    damagePercentage: "DynamicFloat",
    damagePercentageRatio: "DynamicFloat",
    elementType: "ElementType",
    elementRank: "float",
    elementDurability: "DynamicFloat",
    overrideByWeapon: "bool",
    ignoreAttackerProperty: "bool",
    strikeType: "StrikeType",
    enBreak: "float",
    enHeadBreak: "float",
    attackType: "AttackType",
    damageExtra: "DynamicFloat",
    bonusCritical: "DynamicFloat",
    bonusCriticalHurt: "DynamicFloat",
    ignoreLevelDiff: "bool",
    trueDamage: "bool",
    ignoreModifyDamage: "bool",
  },
}
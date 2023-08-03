import { ConfigDefault } from "../"

export const AttackCostElementMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    strikeType: "StrikeType",
    elementType: "ElementType",
    attackType: "AttackType",
    strikeCostRatio: "float",
    attackCostRatio: "float",
    elementCostRatio: "float",
    costElementType: "ElementType",
    costType: "AttackCostType",
  },
}
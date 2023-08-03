import { ConfigDefault } from "../"

export const AttackReviveEnergyMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    attackTags: "string[]",
    maxValue: "float",
    minValue: "float",
    addValue: "float",
    reviveAction: "ConfigAbilityAction",
    fireEffectActions: "map<ElementType,ConfigAbilityAction>",
  },
}

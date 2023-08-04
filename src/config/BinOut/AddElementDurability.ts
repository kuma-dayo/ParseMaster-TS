import { ConfigDefault } from ".."

export const AddElementDurability: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    value: "DynamicFloat",
    modifierName: "string",
    elementType: "ElementType",
    sortModifier: "SortModifierType",
    useLimitRange: "bool",
    useMutiPlayerFixData: "bool",
    maxValue: "DynamicFloat",
    minValue: "DynamicFloat",
  },
}

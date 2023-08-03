import { ConfigDefault } from "../"

export const ByHitElementDurability: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityPredicate",
  Fields: {
    element: "ElementType",
    durability: "float",
    compareType: "RelationType",
    applyAttenuation: "bool",
  },
}

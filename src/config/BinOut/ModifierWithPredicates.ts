import { ConfigDefault } from ".."

export const ModifierWithPredicates: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    modifierName: "string",
    predicates: "ConfigAbilityPredicate[]",
    attachModifier: "bool",
  },
}

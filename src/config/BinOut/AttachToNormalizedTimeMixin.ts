import { ConfigDefault } from "../"

export const AttachToNormalizedTimeMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    stateID: "string",
    modifierName: "string",
    target: "AbilityTargetting",
    predicates: "ConfigAbilityPredicate[]",
    normalizeStart: "float",
    normalizeEnd: "float",
  },
}

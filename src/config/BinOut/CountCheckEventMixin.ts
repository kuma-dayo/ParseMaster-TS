import { ConfigDefault } from "../"

export const CountCheckEventMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    eventKey: "string",
    predicates: "ConfigAbilityPredicate[]",
    checkTime: "float",
    checkCount: "vuint",
    actionQueue: "ConfigAbilityAction[]",
  },
}

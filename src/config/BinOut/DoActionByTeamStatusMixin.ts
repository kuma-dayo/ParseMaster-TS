import { ConfigDefault } from "../"

export const DoActionByTeamStatusMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    actions: "ConfigAbilityAction[]",
    predicates: "ConfigAbilityPredicate[]",
    waitTime: "float",
    waitForBigteam: "bool",
    runPostRecover: "bool",
  },
}

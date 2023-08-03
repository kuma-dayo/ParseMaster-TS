import { ConfigDefault } from "../"

export const ConfigAbilityAction: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    token: "ConfigAbilityActionToken",
    target: "AbilityTargetting",
    otherTargets: "SelectTargets",
    doOffStage: "bool",
    doAfterDie: "bool",
    canBeHandledOnRecover: "bool",
    muteRemoteAction: "bool",
    predicates: "ConfigAbilityPredicate[]",
    predicatesForeach: "ConfigAbilityPredicate[]",
  },
}

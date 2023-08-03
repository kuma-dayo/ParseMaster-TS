import { ConfigDefault } from "../"

export const DoActionByPoseIDMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    poseIDs: "vint[]",
    enterPredicates: "ConfigAbilityPredicate[]",
    exitPredicates: "ConfigAbilityPredicate[]",
    enterActions: "ConfigAbilityAction[]",
    exitActions: "ConfigAbilityAction[]",
  },
}

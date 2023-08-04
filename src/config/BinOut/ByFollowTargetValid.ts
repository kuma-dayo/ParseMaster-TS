import { ConfigDefault } from ".."

export const ByFollowTargetValid: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityPredicate",
  Fields: {
    checkComponent: "bool",
    checkHasFollowTarget: "bool",
    checkVisible: "bool",
    checkActive: "bool",
    checkValid: "bool",
  },
}

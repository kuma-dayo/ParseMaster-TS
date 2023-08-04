import { ConfigDefault } from ".."

export const SetSelfAttackTarget: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    turnToTargetImmediately: "bool",
    turnToTargetKeepUpAxisDirection: "bool",
  },
}

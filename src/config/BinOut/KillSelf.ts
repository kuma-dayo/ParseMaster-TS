import { ConfigDefault } from "../"

export const KillSelf: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    duration: "float",
    dieStateFlage: "DieStateFlag",
    banDrop: "bool",
    banExp: "bool",
    banHPPercentageDrop: "bool",
    killSelfType: "KillSelfType",
    hideEntity: "bool",
  },
}
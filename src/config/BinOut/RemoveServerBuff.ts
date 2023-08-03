import { ConfigDefault } from "../"

export const RemoveServerBuff: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    sBuffId: "vuint",
    isTeamBuff: "bool",
  },
}

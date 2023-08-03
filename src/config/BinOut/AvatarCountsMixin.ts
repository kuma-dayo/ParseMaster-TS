import { ConfigDefault } from "../"

export const AvatarCountsMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    aliveAvatarCount: "vint",
    actionList: "ConfigAbilityAction[]",
  },
}

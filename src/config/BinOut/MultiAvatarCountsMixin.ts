import { ConfigDefault } from ".."

export const MultiAvatarCountsMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    aliveAvatarCount: "vint",
    actionList: "ConfigAbilityAction[]",
  },
}

import { ConfigDefault } from "../"

export const OnLocalAvatarAddedShieldMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    shieldTypeList: "HasShieldType[]",
    actions: "ConfigAbilityAction[]",
  },
}
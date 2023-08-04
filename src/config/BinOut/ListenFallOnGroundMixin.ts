import { ConfigDefault } from ".."

export const ListenFallOnGroundMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    onGround: "ConfigAbilityAction[]",
  },
}

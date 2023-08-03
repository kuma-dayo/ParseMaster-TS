import { ConfigDefault } from "../"

export const BeingHitMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    toAttacker: "ConfigAbilityAction[]",
    toAttackerOwner: "ConfigAbilityAction[]",
    toAttackerOriginOwner: "ConfigAbilityAction[]",
  },
}

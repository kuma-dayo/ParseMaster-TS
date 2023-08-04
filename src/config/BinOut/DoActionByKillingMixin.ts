import { ConfigDefault } from ".."

export const DoActionByKillingMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    attackTags: "string[]",
    detectWindow: "float",
    onKill: "ConfigAbilityAction[]",
  },
}

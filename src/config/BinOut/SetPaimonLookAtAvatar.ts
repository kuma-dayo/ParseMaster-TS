import { ConfigDefault } from ".."

export const SetPaimonLookAtAvatar: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    from: "PaimonRequestFrom",
    lookat: "bool",
    minTime: "float",
    maxTime: "float",
  },
}

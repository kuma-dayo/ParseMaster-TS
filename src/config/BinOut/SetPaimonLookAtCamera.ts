import { ConfigDefault } from "../"

export const SetPaimonLookAtCamera: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    from: "PaimonRequestFrom",
    lookat: "bool",
    minTime: "float",
    maxTime: "float",
  },
}

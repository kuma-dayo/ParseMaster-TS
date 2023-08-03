import { ConfigDefault } from "../"

export const AttachToAIAlertnessMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    alertness: "vint[]",
    modifierName: "string",
  },
}

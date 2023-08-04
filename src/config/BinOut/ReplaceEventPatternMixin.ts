import { ConfigDefault } from ".."

export const ReplaceEventPatternMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    oldPatterns: "string[]",
    newPatterns: "string[]",
  },
}

import { ConfigDefault } from "../"

export const UnitDurationMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    isTrigger: "bool",
    modifierName: "string[]",
    steps: "DynamicFloat[]",
  },
}
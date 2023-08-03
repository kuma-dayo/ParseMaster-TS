import { ConfigDefault } from "../"

export const AttachModifierToClimateMeterMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    valueSteps: "DynamicFloat[]",
    modifierNameSteps: "string[]",
  },
}

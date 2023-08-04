import { ConfigDefault } from ".."

export const AttachToMonsterAirStateMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    modifierName: "string",
    IsAirMove: "bool",
  },
}

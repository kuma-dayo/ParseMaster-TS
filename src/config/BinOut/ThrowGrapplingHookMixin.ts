import { ConfigDefault } from ".."

export const ThrowGrapplingHookMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    effectPattern: "string",
    positionKey: "string",
    onHookReached: "ConfigAbilityAction[]",
  },
}

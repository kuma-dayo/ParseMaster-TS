import { ConfigDefault } from ".."

export const DoBlinkByGlobalPos: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    positionKey: "string",
    directionKey: "string",
    useGlobalUp: "bool",
  },
}

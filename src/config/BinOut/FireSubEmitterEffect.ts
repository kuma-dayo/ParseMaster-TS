import { ConfigDefault } from "../"

export const FireSubEmitterEffect: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    effectPattern: "DynamicString",
    born: "ConfigBornType",
    scale: "float",
  },
}
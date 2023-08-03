import { ConfigDefault } from "../"

export const FireEffectToTarget: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    effectPattern: "DynamicString",
    reverse: "bool",
    fromSelf: "bool",
    scale: "float",
  },
}

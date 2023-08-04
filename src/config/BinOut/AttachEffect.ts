import { ConfigDefault } from ".."

export const AttachEffect: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    effectPattern: "DynamicString",
    born: "ConfigBornType",
    scale: "float",
    effectTempleteID: "DynamicFloat",
    setSelfAsEffectPluginTarget: "bool",
    isPlatformDependent: "bool",
  },
}

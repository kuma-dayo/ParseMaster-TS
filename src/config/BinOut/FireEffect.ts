import { ConfigDefault } from ".."

export const FireEffect: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    effectPattern: "DynamicString",
    othereffectPatterns: "string[]",
    born: "ConfigBornType",
    ownedByLevel: "bool",
    useY: "bool",
    scale: "float",
    effectTempleteID: "DynamicFloat",
    setSelfAsEffectPluginTarget: "bool",
    useRemoteSelfPos: "bool",
    isPlatformDependent: "bool",
  },
}

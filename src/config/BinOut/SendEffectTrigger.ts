import { ConfigDefault } from ".."

export const SendEffectTrigger: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    parameter: "string",
    attachPoint: "string",
    type: "AnimatorParamType",
    value: "vint",
    effectPattern: "DynamicString",
    floatValue: "float",
    notInvokeWhenNotAlive: "bool",
    isPlatformDependent: "bool",
  },
}

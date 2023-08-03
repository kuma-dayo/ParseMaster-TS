import { ConfigDefault } from "../"

export const SendEffectTriggerToLineEffect: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    parameter: "string",
    attachPoint: "string",
    type: "AnimatorParamType",
    value: "vint",
    effectPattern: "DynamicString",
    floatValue: "float",
  },
}

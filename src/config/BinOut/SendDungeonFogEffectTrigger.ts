import { ConfigDefault } from ".."

export const SendDungeonFogEffectTrigger: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    parameter: "string",
    type: "AnimatorParamType",
    value: "vint",
    cameraFogEffectName: "DynamicString",
    playerFogEffectName: "DynamicString",
    floatValue: "float",
    notInvokeWhenNotAlive: "bool",
    isPlatformDependent: "bool",
  },
}

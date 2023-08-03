import { ConfigDefault } from "../"

export const TriggerWitchTimeMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    ignoreTargetType: "TargetType",
    timescale: "float",
    duration: "float",
    useMax: "bool",
    enableEffect: "bool",
    enableDelay: "bool",
    delayTimeScale: "float",
    delayDuration: "float",
    openEffectPattern: "string",
    closeEffectPattern: "string",
    weatherPattern: "string",
  },
}

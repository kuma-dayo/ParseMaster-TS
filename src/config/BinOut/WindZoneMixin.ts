import { ConfigDefault } from ".."

export const WindZoneMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    shapeName: "string",
    born: "ConfigBornType",
    strength: "DynamicFloat",
    attenuation: "DynamicFloat",
    innerRadius: "DynamicFloat",
    reverse: "bool",
    targetType: "TargetType",
    predicates: "ConfigAbilityPredicate[]",
    modifierName: "string",
    maxNum: "vuint",
    forceGrowth: "float",
    forceFallen: "float",
    offset: "Vector",
    forceType: "VelocityForceType",
    thinkInterval: "float",
    onThinkInterval: "ConfigAbilityAction[]",
    overrideWeight: "float",
  },
}

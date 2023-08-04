import { ConfigDefault } from ".."

export const ClampDamageReceivedMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    clampType: "DamageClampType",
    maxValue: "DynamicFloat",
    minValue: "DynamicFloat",
  },
}

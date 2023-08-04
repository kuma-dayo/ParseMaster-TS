import { ConfigDefault } from ".."

export const ChargeBarMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    chargeBarElementType: "ElementType",
    chargeBarIconID: "vint",
    initialValue: "DynamicFloat",
    maxValue: "DynamicFloat",
  },
}

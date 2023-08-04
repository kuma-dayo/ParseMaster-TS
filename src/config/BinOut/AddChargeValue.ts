import { ConfigDefault } from ".."

export const AddChargeValue: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    chargeType: "ElementType",
    value: "DynamicFloat",
    globalValueKey: "string",
  },
}

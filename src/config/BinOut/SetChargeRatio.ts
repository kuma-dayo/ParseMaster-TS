import { ConfigDefault } from "../"

export const SetChargeRatio: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    chargeType: "ElementType",
    ratio: "DynamicFloat",
    globalValueKey: "string",
  },
}

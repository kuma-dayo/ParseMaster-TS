import { ConfigDefault } from "../"

export const GadgetChargeMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    chargeType: "ElementType",
    chargeRatio: "float",
    chargeValue: "float",
    maxChargeValue: "float",
    valueSteps: "DynamicFloat[]",
    modifierNameSteps: "string[]",
    globalValueKey: "string",
    ratioGlobalValueKey: "string",
  },
}

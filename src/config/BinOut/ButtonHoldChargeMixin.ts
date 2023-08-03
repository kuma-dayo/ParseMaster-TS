import { ConfigDefault } from "../"

export const ButtonHoldChargeMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    skillID: "vuint",
    chargeTime: "float",
    secondChargeTime: "DynamicFloat",
    OnBeginUncharged: "ConfigAbilityAction[]",
    OnReleaseUncharged: "ConfigAbilityAction[]",
    OnBeginCharged: "ConfigAbilityAction[]",
    OnReleaseCharged: "ConfigAbilityAction[]",
    OnBeginSecondCharged: "ConfigAbilityAction[]",
    OnReleaseSecondCharged: "ConfigAbilityAction[]",
    OnCancelCharged: "ConfigAbilityAction[]",
    chargeStateIDs: "string[]",
  },
}

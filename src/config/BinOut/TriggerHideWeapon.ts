import { ConfigDefault } from ".."

export const TriggerHideWeapon: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    visible: "bool",
    partNames: "string[]",
    modifyAnotherValue: "bool",
  },
}

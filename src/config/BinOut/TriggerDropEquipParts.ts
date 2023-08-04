import { ConfigDefault } from ".."

export const TriggerDropEquipParts: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    dropAll: "bool",
    equipParts: "string[]",
  },
}

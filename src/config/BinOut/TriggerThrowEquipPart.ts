import { ConfigDefault } from ".."

export const TriggerThrowEquipPart: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    equipPart: "string",
    chaseAttackTarget: "bool",
    born: "ConfigBornType",
  },
}

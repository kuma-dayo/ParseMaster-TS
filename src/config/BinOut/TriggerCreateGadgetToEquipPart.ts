import { ConfigDefault } from "../"

export const TriggerCreateGadgetToEquipPart: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    gadgetID: "vuint",
    equipPart: "string",
  },
}

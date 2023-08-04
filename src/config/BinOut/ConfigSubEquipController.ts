import { ConfigDefault } from ".."

export const ConfigSubEquipController: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseEquipController",
  Fields: {
    name: "string",
    attachPoint: "string",
    configID: "vuint",
    muteAbilityState: "bool",
  },
}

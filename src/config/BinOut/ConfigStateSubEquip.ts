import { ConfigDefault } from "../"

export const ConfigStateSubEquip: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    battouAllSubOnStart: "bool",
    sheatheAllSubOnStart: "bool",
    sheatheAllSubOnEnd: "bool",
    battouSubOnStart: "string[]",
    sheatheSubOnStart: "string[]",
    sheatheSubOnEnd: "string[]",
    subEquipReattach: "ConfigEquipReattach[]",
  },
}

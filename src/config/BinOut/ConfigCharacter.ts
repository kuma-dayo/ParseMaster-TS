import { ConfigDefault } from ".."

export const ConfigCharacter: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigEntity",
  Fields: {
    combat: "ConfigCombat",
    equipController: "ConfigEquipController",
    subEquipControllers: "ConfigSubEquipController[]",
    abilities: "ConfigEntityAbilityEntry[]",
    stateLayers: "map<string,ConfigBaseStateLayer>",
    face: "ConfigFace",
    partControl: "ConfigPartController",
    billboard: "ConfigBillboard",
    bindEmotions: "string[]",
  },
}

import { ConfigDefault } from ".."

export const ConfigEquipController: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigBaseEquipController",
  Fields: {
    attachPoints: "map<string,string>",
    weaponAwayFromHandStates: "WeaponAwayFromHandState[]",
  },
}

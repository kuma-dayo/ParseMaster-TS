import { ConfigDefault } from "../"

export const WeaponPromoteExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    weaponPromoteId: "vuint",
    promoteLevel: "vuint",
    costItems: "IdCountConfig[]",
    coinCost: "vuint",
    addProps: "PropValConfig[]",
    unlockMaxLevel: "vuint",
    requiredPlayerLevel: "vuint",
  },
}

import { ConfigDefault } from "../"

export const AttachAbilityStateResistance: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityAction",
  Fields: {
    resistanceListID: "vuint",
    resistanceBuffDebuffs: "AbilityState[]",
    durationRatio: "float",
  },
}

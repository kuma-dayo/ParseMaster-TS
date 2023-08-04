import { ConfigDefault } from ".."

export const ByBigTeamHasWeaponType: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityPredicate",
  Fields: {
    weaponType: "string",
    number: "vuint",
    logic: "RelationalOperator",
  },
}

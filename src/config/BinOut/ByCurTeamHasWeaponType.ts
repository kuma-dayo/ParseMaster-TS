import { ConfigDefault } from "../"

export const ByCurTeamHasWeaponType: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityPredicate",
  Fields: {
    weaponType: "string",
    number: "vuint",
    logic: "RelationalOperator",
  },
}

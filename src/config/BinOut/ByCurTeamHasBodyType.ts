import { ConfigDefault } from "../"

export const ByCurTeamHasBodyType: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityPredicate",
  Fields: {
    bodyType: "string",
    number: "vuint",
    logic: "RelationalOperator",
  },
}

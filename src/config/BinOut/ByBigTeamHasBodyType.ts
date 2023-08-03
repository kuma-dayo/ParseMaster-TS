import { ConfigDefault } from "../"

export const ByBigTeamHasBodyType: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityPredicate",
  Fields: {
    bodyType: "string",
    number: "vuint",
    logic: "RelationalOperator",
  },
}

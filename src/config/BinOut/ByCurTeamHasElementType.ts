import { ConfigDefault } from "../"

export const ByCurTeamHasElementType: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityPredicate",
  Fields: {
    elementType: "ElementType",
    number: "vuint",
    logic: "RelationalOperator",
  },
}

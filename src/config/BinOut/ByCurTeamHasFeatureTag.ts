import { ConfigDefault } from "../"

export const ByCurTeamHasFeatureTag: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityPredicate",
  Fields: {
    featureTagID: "vuint",
    number: "vuint",
    logic: "RelationalOperator",
  },
}

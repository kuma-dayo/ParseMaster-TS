import { ConfigDefault } from "../"

export const ByBigTeamHasFeatureTag: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityPredicate",
  Fields: {
    featureTagID: "vuint",
    number: "vuint",
    logic: "RelationalOperator",
  },
}

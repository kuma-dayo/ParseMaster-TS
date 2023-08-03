import { ConfigDefault } from "../"

export const ByTargetInArea: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityPredicate",
  Fields: {
    areaLevel: "TargetPositionAreaLevel",
    areas: "vuint[]",
  },
}

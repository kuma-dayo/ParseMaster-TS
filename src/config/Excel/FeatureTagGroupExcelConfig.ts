import { ConfigDefault } from "../"

export const FeatureTagGroupExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    groupID: "vuint",
    tagIDs: "vuint[]",
  },
}

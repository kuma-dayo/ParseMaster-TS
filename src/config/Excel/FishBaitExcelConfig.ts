import { ConfigDefault } from ".."

export const FishBaitExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    featureList: "FishBaitFeature[]",
    sort: "byte",
    poolIdList: "vuint[]",
  },
}

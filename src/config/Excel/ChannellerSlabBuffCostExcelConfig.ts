import { ConfigDefault } from "../"

export const ChannellerSlabBuffCostExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    buffQualityType: "QualityType",
    buffCost: "vuint",
    itemID: "vuint",
    descTextMapHash: "vuint",
  },
}

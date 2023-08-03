import { ConfigDefault } from "../"

export const ChannellerSlabBuffExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    buffNameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    descParam: "string[]",
    materialID: "vuint",
    icon: "string",
    cost: "vuint",
    buffQuality: "ChannellerSlabBuffQuality",
    buffQualityType: "QualityType",
  },
}

import { ConfigDefault } from "../"

export const ReliquaryDecomposeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    needReliquaryCount: "vuint",
    needReliquaryRankLevel: "vuint",
    rewardPreviewId: "vuint",
    maxReliquaryNum: "vuint",
    effectDescTextMapHash: "vuint",
  },
}

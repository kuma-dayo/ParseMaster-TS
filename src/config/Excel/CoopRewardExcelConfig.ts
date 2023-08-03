import { ConfigDefault } from "../"

export const CoopRewardExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    rewardCond: "CoopCondConfig[]",
    chapterId: "vuint",
    rewardId: "vuint",
    sortId: "vuint",
    condTipTextMapHash: "vuint",
    condTipDesTextMapHash: "vuint",
  },
}

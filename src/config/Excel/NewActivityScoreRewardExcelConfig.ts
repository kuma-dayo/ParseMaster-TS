import { ConfigDefault } from "../"

export const NewActivityScoreRewardExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    rewardID: "vuint",
    score: "vuint",
    activityScoreTipsTextMapHash: "vuint",
    activityScoreExtraTipsTextMapHash: "vuint",
  },
}
import { ConfigDefault } from "../"

export const LuminanceStoneChallengeOverallExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    finalStageId: "vuint",
    finalGalleryId: "vuint",
    parentQuestIdList: "vuint[]",
    rewardPreviewId: "vuint",
    galleryRuleDescTextMapHash: "vuint",
  },
}

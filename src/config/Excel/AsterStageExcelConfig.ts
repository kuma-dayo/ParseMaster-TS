import { ConfigDefault } from ".."

export const AsterStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    chapterId: "vuint",
    titleTextMapHash: "vuint",
    stageNameTextMapHash: "vuint",
    openday: "vuint",
    openQuestId: "vuint",
    introTextMapHash: "vuint",
    storyTextMapHash: "vuint",
    unlockScore: "vuint",
    questIdList: "vuint[]",
    rewardPreviewId: "vuint",
  },
}

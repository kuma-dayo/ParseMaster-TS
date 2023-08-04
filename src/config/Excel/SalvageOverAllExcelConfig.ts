import { ConfigDefault } from ".."

export const SalvageOverAllExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    activityDuration: "vuint",
    preQuestId: "vuint",
    guideQuestId: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    regionCenter: "float[]",
    regionRadius: "vuint",
    reminderRadius: "vuint",
    reminderId: "vuint",
    destoryRadius: "vuint",
    rewardPreviewId: "vuint",
    landRewardPreviewID: "vuint",
    seaRewardPreviewID: "vuint",
  },
}

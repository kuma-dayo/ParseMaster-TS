import { ConfigDefault } from ".."

export const DailyTaskLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    minPlayerLevel: "vuint",
    maxPlayerLevel: "vuint",
    groupReviseLevel: "vuint",
    scoreDropId: "vuint",
    scorePreviewRewardId: "vuint",
  },
}

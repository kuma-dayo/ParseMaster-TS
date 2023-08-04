import { ConfigDefault } from ".."

export const AchievementGoalExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    orderId: "vuint",
    nameTextMapHash: "vuint",
    finishRewardId: "vuint",
    iconPath: "string",
  },
}

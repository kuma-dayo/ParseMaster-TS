import { ConfigDefault } from ".."

export const BartenderTaskExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    unlockDay: "vuint",
    parentQuestId: "vuint",
    unlockCond: "vuint",
    avatarID1: "vuint",
    avatarID2: "vuint",
    rewardPreviewId: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
  },
}

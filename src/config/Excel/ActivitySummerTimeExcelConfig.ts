import { ConfigDefault } from "../"

export const ActivitySummerTimeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    unlockQuestID: "vuint",
    contentDuration: "vuint",
    unlockPlayerLevel: "vuint",
    personalPreQuest: "vuint",
    preQuestOfPreQuest: "vuint[]",
    rewardPreview: "vuint",
    questIdList: "vuint[]",
  },
}

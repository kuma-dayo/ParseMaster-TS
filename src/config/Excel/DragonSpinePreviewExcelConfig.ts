import { ConfigDefault } from "../"

export const DragonSpinePreviewExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    descTextMapHash: "vuint",
    preQuestId: "vuint",
    unlockLevel: "vuint",
    rewardPreviewId: "vuint",
    contentDuration: "vuint",
    questId: "vuint",
    questIdList: "vuint[]",
  },
}
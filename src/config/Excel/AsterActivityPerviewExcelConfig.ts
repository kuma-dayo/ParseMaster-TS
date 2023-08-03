import { ConfigDefault } from "../"

export const AsterActivityPerviewExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    activityId: "vuint",
    descTextMapHash: "vuint",
    unlockLevel: "vuint",
    rewardPreviewId: "vuint",
    watcherList: "vuint[]",
    specialRewardId: "vuint",
    activityStayTime: "vuint",
    perfabChangeQuestId: "vuint",
  },
}

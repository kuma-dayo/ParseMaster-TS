import { ConfigDefault } from "../"

export const ActivityHideAndSeekBasicConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityID: "vuint",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    pushTipsID: "vuint",
    rewardPreviewID: "vuint",
    oneTimeRewardPreviewID: "vuint",
    unlockQuestID: "vuint",
    matchID: "vuint",
    draftID: "vuint",
    scoreUnlockList: "vuint[]",
    watcherList: "vuint[]",
    skillList: "vuint[]",
    mapList: "vuint[]",
    chanllengeList: "vuint[]",
    scoreItemID: "vuint",
  },
}
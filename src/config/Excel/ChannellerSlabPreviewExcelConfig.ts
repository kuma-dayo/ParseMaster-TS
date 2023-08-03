import { ConfigDefault } from "../"

export const ChannellerSlabPreviewExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    activityStayTime: "vuint",
    unlockQuestID: "vuint",
    slabQuestID: "vuint",
    unlockPlayerLevel: "vuint",
    levelRewardGadgetID: "vuint",
    isMaskAvatarReward: "bool",
    rewardPreviewId: "vuint",
  },
}
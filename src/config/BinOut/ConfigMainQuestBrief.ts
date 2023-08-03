import { ConfigDefault } from "../"

export const ConfigMainQuestBrief: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    id: "vuint",
    series: "vuint",
    type: "QuestType",
    mainQuestTag: "MainQuestTagType",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    recommendLevel: "vuint",
    suggestTrackMainQuestList: "vuint[]",
    rewardIdList: "vuint[]",
    showType: "QuestShowType",
    specialShowRewardId: "vuint[]",
    specialShowCondIdList: "vuint[]",
    specialShowQuestId: "vuint",
    chapterId: "vuint",
    taskId: "vuint",
    subQuests: "ConfigQuestScheme[]",
  },
}

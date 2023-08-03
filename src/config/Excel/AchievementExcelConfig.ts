import { ConfigDefault } from "../"

export const AchievementExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "WatcherConfig",
  Fields: {
    goalId: "vuint",
    orderId: "vuint",
    preStageAchievementId: "vuint",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    isShow: "ShowType",
    ps4GroupId: "vuint",
    ps5GroupId: "vuint",
    ps5TitleTextMapHash: "vuint",
    ttype: "string",
    psTrophyId: "string",
    ps4TrophyId: "string",
    ps5TrophyId: "string",
    icon: "string",
    finishRewardId: "vuint",
    isDeleteWatcherAfterFinish: "bool",
    progressShowType: "ProgressShowType",
  },
}

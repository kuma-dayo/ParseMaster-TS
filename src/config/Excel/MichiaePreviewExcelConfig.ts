import { ConfigDefault } from ".."

export const MichiaePreviewExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    activityID: "vuint",
    descTextMapHash: "vuint",
    intro_titleTextMapHash: "vuint",
    intro_contentTextMapHash: "vuint",
    rewardPreviewID: "vuint",
    pushTipsID: "vuint",
    bossGroupBundleId: "vuint",
    radarSearchRadius: "float",
    radarRemoveRadius: "float",
    allRadarShowLimit: "vuint",
    preSubQuestId: "vuint",
    preActivityQuestId: "vuint",
    activityQuestId: "vuint",
    preQuestIdMap: "map<vuint,vuint>",
    preQuestIdList: "vuint[]",
  },
}

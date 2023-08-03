import { ConfigDefault } from "../"

export const FleurFairMiniGameExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    miniGameType: "FleurFairMiniGameType",
    descTextMapHash: "vuint",
    galleryId: "vuint",
    configId: "vuint",
    openDay: "vuint",
    questId: "vuint",
    rewardRankLowTextMapHash: "vuint",
    rewardRankMiddleTextMapHash: "vuint",
    rewardRankHighTextMapHash: "vuint",
    watcherIdList: "vuint[]",
    avatarIdList: "vuint[]",
    avatarScore: "vuint[]",
    tipsIdList: "vuint[]",
    tipsDescTextMapHash: "vuint",
    pos: "float[]",
  },
}
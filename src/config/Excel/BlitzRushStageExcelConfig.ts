import { ConfigDefault } from ".."

export const BlitzRushStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    openDay: "vuint",
    watcherIdList: "vuint[]",
    stageTitleTextMapHash: "vuint",
    gamePlayDescTextMapHash: "vuint",
    guidetaskDescTextMapHash: "vuint",
    guideQuestID: "vuint",
    pushTipsId: "vuint",
  },
}

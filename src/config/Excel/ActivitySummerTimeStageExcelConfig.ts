import { ConfigDefault } from ".."

export const ActivitySummerTimeStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    stageId: "vuint",
    openDay: "vuint",
    watcherIdList: "vuint[]",
    mainQuest: "vuint",
    preQuest: "vuint",
    guideButtonQuest: "vuint",
    guidePushtipsID: "vuint",
    questTitleTextMapHash: "vuint",
    questDescTextMapHash: "vuint",
    gameplayTitleTextMapHash: "vuint",
    gameplayDescTextMapHash: "vuint",
  },
}

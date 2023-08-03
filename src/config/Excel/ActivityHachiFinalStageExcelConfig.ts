import { ConfigDefault } from "../"

export const ActivityHachiFinalStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    stageId: "vuint",
    questId: "vuint[]",
    questTitleTextMapHash: "vuint",
    questDescTextMapHash: "vuint",
    bossTitleTextMapHash: "vuint",
    bossDescTextMapHash: "vuint",
    dungeonId: "vuint",
    watcherIdList: "vuint[]",
    openDay: "vuint",
    finalQuestID: "vuint[]",
    dungeonEntryId: "vuint",
  },
}

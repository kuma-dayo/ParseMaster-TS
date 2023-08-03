import { ConfigDefault } from "../"

export const ActivityPotionStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    stageId: "vuint",
    openDay: "vuint",
    levelIdList: "vuint[]",
    dungeonEntryID: "vuint",
    watcherIdList: "vuint[]",
    trialAvatarList: "vuint[]",
    buffIdList: "vuint[]",
    titleTextMapHash: "vuint",
    desciptionTextMapHash: "vuint",
  },
}

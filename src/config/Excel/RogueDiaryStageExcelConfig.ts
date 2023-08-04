import { ConfigDefault } from ".."

export const RogueDiaryStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    condId: "vuint",
    normalDungeonIdList: "vuint[]",
    hardDungeonIdList: "vuint[]",
    insaneDungeonIdList: "vuint[]",
    optionalCardCount: "vuint",
    chosenCardCount: "vuint",
    tiredType: "RogueDiaryTiredType",
    tiredReserveAvatarCount: "vuint",
    tiredRoundCount: "vuint",
    trialAvatarList: "vuint[]",
    timeLevelList: "vuint[]",
    watcherIdList: "vuint[]",
    pushTipsId: "vuint",
    dungeonNameTextMapHash: "vuint",
    dungeonDescTextMapHash: "vuint",
  },
}

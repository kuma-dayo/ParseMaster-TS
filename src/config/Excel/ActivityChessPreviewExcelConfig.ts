import { ConfigDefault } from ".."

export const ActivityChessPreviewExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    activityID: "vuint",
    descTextMapHash: "vuint",
    rewardPreviewID: "vuint",
    preQuestMainID: "vuint",
    openQuestMainID: "vuint",
    watcherList: "vuint[]",
    matchPlayerLimit: "vuint",
    openTeachDungeon: "bool",
    teachDungeonID: "vuint",
    teachMapID: "vuint",
    punishTime: "vuint",
    coinID: "vuint",
    seriesID: "vuint",
    teachScoreIdList: "vuint[]",
  },
}

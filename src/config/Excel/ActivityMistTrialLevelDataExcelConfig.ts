import { ConfigDefault } from ".."

export const ActivityMistTrialLevelDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    scheduleId: "vuint",
    levelId: "vuint",
    levelTitleTextMapHash: "vuint",
    levelDescTextMapHash: "vuint",
    monsterPreviewIdList: "vuint[]",
    keyMonsterPreviewIdList: "vuint[]",
    openDay: "vuint",
    challengeMissionWatcherList: "vuint[]",
    statisticsIdList: "vuint[]",
    bgIconHash: "vuint",
    dungeonId: "vuint",
    dungeonFactorIdList: "vuint[]",
    failTips: "string[]",
    trialAvatarIdList: "vuint[]",
    serverGlobalValueKey: "string",
    floorLevelList: "vuint[]",
    battleStatisticsData: "vuint[]",
  },
}

import { ConfigDefault } from "../"

export const FleurFairDungeonExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    sectionId: "vuint",
    openDay: "vuint",
    obtainCoinLimit: "vuint",
    activityId: "vuint",
    watcherIdList: "vuint[]",
    dungeonId: "vuint",
    miniGameList: "vuint[]",
    monsterList: "vuint[]",
    energyGradeList: "vuint[]",
    initialEnergy: "vuint",
    energyLimit: "vuint",
    successRewardId: "vuint",
    failureRewardId: "vuint",
    punishTime: "vuint",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
  },
}

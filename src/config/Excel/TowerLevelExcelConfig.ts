import { ConfigDefault } from ".."

export const TowerLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    levelId: "vuint",
    levelGroupId: "vuint",
    levelIndex: "vuint",
    dungeonId: "vuint",
    conds: "TowerCondition[]",
    towerBuffConfigStrList: "string[]",
    dailyRewardId: "vuint",
    firstPassRewardId: "vuint",
    monsterLevel: "vuint",
    firstMonsterList: "vuint[]",
    secondMonsterList: "vuint[]",
  },
}

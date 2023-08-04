import { ConfigDefault } from ".."

export const ActivityCrystalLinkLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    levelId: "vuint",
    scheduleId: "vuint",
    openDay: "vuint",
    dungeonId: "vuint",
    trialAvatarList: "vuint[]",
    watcherIdList: "vuint[]",
    condBuffIdList: "vuint[]",
    effectBuffIdList: "vuint[]",
    levelTitleTextMapHash: "vuint",
    levelDescTextMapHash: "vuint",
    monsterConfigArray: "MonsterConfig[]",
    mainMonsterConfigArray: "MainMonsterConfig[]",
    scoreLevelList: "vuint[]",
    condCD: "vuint",
    effLastTime: "vuint",
  },
}

import { ConfigDefault } from "../"

export const RogueStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    stageId: "vuint",
    firstPassRewardId: "vuint",
    previewRewardId: "vuint",
    openTime: "vuint",
    maxCoin: "vuint",
    maxLevel: "vuint",
    reviseLevelId: "vuint",
    stageNameTextMapHash: "vuint",
    stageDescTextMapHash: "vuint",
    bossIdList: "vuint[]",
    monsterIdList: "vuint[][]",
    levelBossIdList: "vuint[][]",
    preQuestId: "vuint",
    gotoQuestId: "vuint",
    unlockRuneList: "vuint[]",
    isStoryStage: "bool",
  },
}

import { ConfigDefault } from "../"

export const ActivityPotionLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    levelId: "vuint",
    dungeonId: "vuint",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    buffCountLimit: "vuint",
    monsterPreview: "vuint[]",
    medalScoreList: "vuint[]",
    medalTimeListNormal: "vuint[]",
    medalTimeListHard: "vuint[]",
  },
}
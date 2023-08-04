import { ConfigDefault } from ".."

export const ActivitySumoDifficultyExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    scheduldId: "vuint",
    difficulty: "SumoDifficultyType",
    monsterLevel: "vuint",
    dungeonLevel: "vuint",
    ratio: "float",
    descTextMapHash: "vuint",
  },
}

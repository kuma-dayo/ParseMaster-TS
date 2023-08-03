import { ConfigDefault } from "../"

export const RogueMonsterPoolExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    dungeonId: "vuint",
    difficulty: "RogueMonsterPoolDifficultyType",
    poolIdList: "vuint[]",
  },
}
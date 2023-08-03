import { ConfigDefault } from "../"

export const RogueTokenExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    stageId: "vuint",
    level: "vuint",
    cellType: "RogueMonsterPoolDifficultyType",
    coinANum: "vuint[]",
    coinBNum: "vuint[]",
    coinCNum: "vuint[]",
  },
}
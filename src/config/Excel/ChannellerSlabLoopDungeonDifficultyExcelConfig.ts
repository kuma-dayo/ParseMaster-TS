import { ConfigDefault } from "../"

export const ChannellerSlabLoopDungeonDifficultyExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    dungeonId: "vuint",
    stageId: "vuint",
    difficulty: "ChannellerSlabDifficulty",
    monsterLevel: "vuint",
    scoreRatio: "float",
    baseScore: "vuint",
  },
}

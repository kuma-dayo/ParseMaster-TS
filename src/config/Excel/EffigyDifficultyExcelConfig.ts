import { ConfigDefault } from ".."

export const EffigyDifficultyExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    challengeId: "vuint",
    baseScore: "vuint",
    monsterDifficulty: "EffigyDifficulty",
    monsterLevel: "vuint",
    scoreRatio: "float",
    finishChallengeIndex: "vuint",
  },
}

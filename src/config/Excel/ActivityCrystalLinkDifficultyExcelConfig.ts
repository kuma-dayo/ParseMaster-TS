import { ConfigDefault } from ".."

export const ActivityCrystalLinkDifficultyExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    difficultyId: "vuint",
    scheduleId: "vuint",
    dungeonLevel: "vuint",
    scoreRatio: "float",
    monsterLevel: "vuint",
    difficulty: "CrystalLinkDifficultyType",
    descTextMapHash: "vuint",
  },
}

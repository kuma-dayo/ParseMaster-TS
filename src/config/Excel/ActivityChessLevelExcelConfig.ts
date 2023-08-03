import { ConfigDefault } from "../"

export const ActivityChessLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    level: "vuint",
    descTextMapHash: "vuint",
    expToNext: "vuint",
    homeHP: "vuint",
    initialBuild: "vuint",
    cardCount: "vuint",
    cardCost: "vuint",
    cardFortune: "CardFortuneType",
    fortuneList: "vuint[]",
    freeCardCount: "vuint",
    isNewGearUnlocked: "bool",
    isNewCardUnlocked: "bool",
  },
}

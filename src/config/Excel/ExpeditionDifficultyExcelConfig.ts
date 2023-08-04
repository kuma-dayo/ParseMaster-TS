import { ConfigDefault } from ".."

export const ExpeditionDifficultyExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    needHours: "vuint",
    minPlayer: "vuint",
    maxPlayer: "vuint",
    minRefreshCount: "vuint",
    maxRefreshCount: "vuint",
    coef: "float",
  },
}

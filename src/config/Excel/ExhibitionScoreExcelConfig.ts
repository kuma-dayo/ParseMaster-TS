import { ConfigDefault } from ".."

export const ExhibitionScoreExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    seriesID: "vuint",
    scoreType: "ExhibitionScoreType",
    score: "vuint",
    descTextMapHash: "vuint",
    showOut: "bool",
  },
}

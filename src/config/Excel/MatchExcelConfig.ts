import { ConfigDefault } from ".."

export const MatchExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    matchSubType: "MatchSubType",
    minPlayerNum: "vuint",
    maxPlayerNum: "vuint",
    confirmTime: "vuint",
    isContinueMatch: "bool",
  },
}

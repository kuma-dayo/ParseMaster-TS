import { ConfigDefault } from "../"

export const MatchLimitExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    cond: "MatchCond[]",
  },
}

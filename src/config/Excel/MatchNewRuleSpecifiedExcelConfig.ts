import { ConfigDefault } from ".."

export const MatchNewRuleSpecifiedExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    dungeonId: "vuint",
    isEnable: "bool",
    playerLevelBoundary: "vuint",
    timeBoundary: "vuint",
  },
}

import { ConfigDefault } from "../"

export const MatchNewRuleExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    dungeonSubType: "DungeonSubType",
    isEnable: "bool",
    minLevel: "vuint",
    playerLevelBoundary: "vuint",
    timeBoundary: "vuint",
  },
}
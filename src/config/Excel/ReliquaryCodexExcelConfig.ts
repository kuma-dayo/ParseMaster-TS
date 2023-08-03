import { ConfigDefault } from "../"

export const ReliquaryCodexExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    suitId: "vuint",
    level: "vuint",
    cupId: "vuint",
    leatherId: "vuint",
    capId: "vuint",
    flowerId: "vuint",
    sandId: "vuint",
    SortOrder: "vuint",
    isDisuse: "bool",
    showOnlyUnlocked: "bool",
  },
}

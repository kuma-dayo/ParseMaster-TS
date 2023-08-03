import { ConfigDefault } from "../"

export const PushTipsCodexExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    PushTipId: "vuint",
    SortOrder: "vuint",
    isDisuse: "bool",
  },
}
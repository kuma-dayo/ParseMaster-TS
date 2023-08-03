import { ConfigDefault } from "../"

export const PerceptionTemplateExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    viewRangeFactor: "float",
    feelRangeFactor: "float",
    hearFootstepRangeFactor: "float",
    hearOtherRangeFactor: "float",
  },
}

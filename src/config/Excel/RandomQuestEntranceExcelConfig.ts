import { ConfigDefault } from "../"

export const RandomQuestEntranceExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    weight: "vuint",
    templateId: "vuint",
    filterLogicType: "LogicType",
    filterList: "RandomQuestFilterConfig[]",
  },
}

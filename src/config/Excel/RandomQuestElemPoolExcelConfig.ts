import { ConfigDefault } from ".."

export const RandomQuestElemPoolExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    poolId: "vuint",
    weight: "vuint",
    sampleList: "QuestElemSample[]",
  },
}

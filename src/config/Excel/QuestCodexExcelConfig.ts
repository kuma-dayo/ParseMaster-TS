import { ConfigDefault } from ".."

export const QuestCodexExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    parentQuestId: "vuint",
    chapterId: "vuint",
    SortOrder: "vuint",
    isDisuse: "bool",
  },
}

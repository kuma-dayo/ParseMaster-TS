import { ConfigDefault } from ".."

export const ContextConditionChapterQuestVisible: ConfigDefault = {
  attribute: [],
  baseClass: "ContextCondition",
  Fields: {
    chapterId: "vuint",
    visible: "bool",
  },
}

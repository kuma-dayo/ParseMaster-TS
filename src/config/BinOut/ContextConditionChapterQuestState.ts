import { ConfigDefault } from ".."

export const ContextConditionChapterQuestState: ConfigDefault = {
  attribute: [],
  baseClass: "ContextCondition",
  Fields: {
    chapterId: "vuint",
    state: "QuestState",
    startOrEndQuest: "bool",
  },
}

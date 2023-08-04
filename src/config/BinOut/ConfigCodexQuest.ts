import { ConfigDefault } from ".."

export const ConfigCodexQuest: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    mainQuestId: "vuint",
    questType: "QuestType",
    mainQuestTitle: "ConfigCodexQuestText",
    mainQuestDesp: "ConfigCodexQuestText",
    chapterTitle: "ConfigCodexQuestText",
    chapterNum: "ConfigCodexQuestText",
    subQuests: "ConfigCodexQuestSubQuest[]",
  },
}

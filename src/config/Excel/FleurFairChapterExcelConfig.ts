import { ConfigDefault } from ".."

export const FleurFairChapterExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    chapterId: "vuint",
    openDay: "vuint",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    mainQuest: "vuint",
    preQuest: "vuint",
    miniQuest: "vuint[]",
    icon: "string",
  },
}

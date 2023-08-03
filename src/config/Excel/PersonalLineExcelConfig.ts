import { ConfigDefault } from "../"

export const PersonalLineExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    titleTextMapHash: "vuint",
    chapterId: "vuint",
    startQuestId: "vuint",
    avatarId: "vuint",
    preQuestId: "vuint[]",
    startTime: "string",
    descTextMapHash: "vuint",
    sortOrder: "vuint",
  },
}

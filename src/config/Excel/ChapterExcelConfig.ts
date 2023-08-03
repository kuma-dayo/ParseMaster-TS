import { ConfigDefault } from "../"

export const ChapterExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    beginQuestId: "vuint",
    endQuestId: "vuint",
    needPlayerLevel: "vuint",
    activityId: "vuint",
    needBeginTimeStr: "string",
    chapterNumTextMapHash: "vuint",
    chapterTitleTextMapHash: "vuint",
    chapterIcon: "string",
    chapterImageHash: "vuint",
    chapterImageTitleTextMapHash: "vuint",
    inActivityNeedPlayerLevel: "vuint",
    chapterSerialNumberIcon: "string",
  },
}

import { ConfigDefault } from "../"

export const ActivityArenaChallengeChapterExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    chapterId: "vuint",
    chapterStartDay: "vuint",
    chapterStartQuestId: "vuint",
    chapterEndQuestId: "vuint",
    chapterQuestTitleTextMapHash: "vuint",
    chapterQuestDescTextMapHash: "vuint",
  },
}

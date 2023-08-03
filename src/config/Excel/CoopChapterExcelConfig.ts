import { ConfigDefault } from "../"

export const CoopChapterExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    avatarId: "vuint",
    chapterNameTextMapHash: "vuint",
    coopPageTitleTextMapHash: "vuint",
    chapterSortId: "vuint",
    avatarSortId: "vuint",
    chapterIcon: "string",
    unlockCond: "CoopCondConfig[]",
    unlockCondTips: "vuint[]",
    openMaterialId: "vuint",
    openMaterialNum: "vuint",
    beginTimeStr: "string",
    confidenceValue: "vuint",
    pointGraphPath: "string",
    graphXRatio: "float",
    graphYRatio: "float",
  },
}

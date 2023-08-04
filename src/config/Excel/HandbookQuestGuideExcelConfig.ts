import { ConfigDefault } from ".."

export const HandbookQuestGuideExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    guideID: "vuint",
    typeID: "vuint",
    labelTextMapHash: "vuint",
    mainQuestID: "vuint",
    chapterID: "vuint",
    questType: "QuestType",
    order: "vuint",
    icon: "string",
    isHidenWQ: "bool",
    hidenSubQuestID: "vuint",
    markPointID: "vuint",
    specialGuideID: "vuint",
    showLabelTip: "bool",
    showConds: "HandbookQuestGuideShowCond[]",
  },
}

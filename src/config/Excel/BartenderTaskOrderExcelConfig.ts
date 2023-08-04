import { ConfigDefault } from ".."

export const BartenderTaskOrderExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    questId: "vuint",
    orderId: "vuint[]",
    contentParam: "vuint",
    dialogIdSucc: "vuint",
    dialogIdFail: "vuint",
    isGuideQuest: "bool",
    nextQuestId: "vuint",
  },
}

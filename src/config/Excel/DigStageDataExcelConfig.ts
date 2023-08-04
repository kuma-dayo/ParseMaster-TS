import { ConfigDefault } from ".."

export const DigStageDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    stageID: "vuint",
    questUnlockID: "vuint",
    questID: "vuint",
    stageUnlockID: "vuint",
    questTitleTextMapHash: "vuint",
    questDescTextMapHash: "vuint",
    pushTipsId: "vuint",
    unlockTime: "vuint",
  },
}

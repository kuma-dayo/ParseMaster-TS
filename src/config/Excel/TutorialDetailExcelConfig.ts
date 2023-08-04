import { ConfigDefault } from ".."

export const TutorialDetailExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    type: "TutorialDetailType",
    imageNameList: "string[]",
    descriptTextMapHash: "vuint",
  },
}

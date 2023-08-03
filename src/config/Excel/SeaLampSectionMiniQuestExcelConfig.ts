import { ConfigDefault } from "../"

export const SeaLampSectionMiniQuestExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    sectionId: "vuint",
    openDay: "vuint",
    isSpecial: "bool",
    miniQuestId: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
  },
}
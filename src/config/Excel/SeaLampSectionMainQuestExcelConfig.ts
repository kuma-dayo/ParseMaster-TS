import { ConfigDefault } from ".."

export const SeaLampSectionMainQuestExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    questId: "vuint[]",
    introTextMapHash: "vuint",
    openDay: "vuint",
  },
}

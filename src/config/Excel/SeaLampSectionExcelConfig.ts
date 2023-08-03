import { ConfigDefault } from "../"

export const SeaLampSectionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    sectionId: "vuint",
    activityId: "vuint",
    mainQuestId: "vuint",
    miniQuestId: "vuint[]",
    watcherIdVec: "vuint[]",
    descTextMapHash: "vuint",
    titleTextMapHash: "vuint",
    nameTextMapHash: "vuint",
  },
}
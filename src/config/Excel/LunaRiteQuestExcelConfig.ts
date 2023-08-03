import { ConfigDefault } from "../"

export const LunaRiteQuestExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    questId: "vuint",
    questType: "LunaRiteQuestType",
    openDay: "vuint",
    preQuestId: "vuint",
    atmosphereNeed: "vuint",
    chapterIcon: "string",
    chapterTextMapHash: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
  },
}

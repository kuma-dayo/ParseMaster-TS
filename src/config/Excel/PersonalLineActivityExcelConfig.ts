import { ConfigDefault } from ".."

export const PersonalLineActivityExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    chapterId: "vuint",
    descTextMapHash: "vuint",
    perfabPath: "string",
    feature: "PersonalLineActivityFeature",
  },
}

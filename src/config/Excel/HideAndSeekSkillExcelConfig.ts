import { ConfigDefault } from ".."

export const HideAndSeekSkillExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    challengeID: "vuint",
    skillID: "vuint",
    order: "vuint",
    skillCategory: "HIDE_AND_SEEK_SKILL_CATEGORY",
    skillSubCategory: "HIDE_AND_SEEK_SKILL_SUB_CATEGORY",
    isDefault: "bool",
    categoryDescTextMapHash: "vuint",
    skillIconPathHash: "vuint",
  },
}

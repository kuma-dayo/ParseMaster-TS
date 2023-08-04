import { ConfigDefault } from ".."

export const MichiaeBattleSkillExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    skillId: "vuint",
    skillNameTextMapHash: "vuint",
    skillDescTextMapHash: "vuint",
    descArgs: "string[]",
    iconPath: "string",
    materialId: "vuint",
    materialNum: "vuint",
    ServerGlobalValueName: "string",
  },
}

import { ConfigDefault } from "../"

export const RoguelikeShikigamiExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    sequenceId: "vuint",
    groupId: "vuint",
    level: "vuint",
    unlockCond: "RoguelikeShikigamiUnlockConfig[]",
    costItemId: "vuint",
    costItemCount: "vuint",
    shikiSkillNameTextMapHash: "vuint",
    shikiSkillDescTextMapHash: "vuint",
  },
}

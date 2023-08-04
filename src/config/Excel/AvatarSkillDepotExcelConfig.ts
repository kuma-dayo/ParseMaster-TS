import { ConfigDefault } from ".."

export const AvatarSkillDepotExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    energySkill: "vuint",
    talentSkill: "vuint",
    skills: "vuint[]",
    subSkills: "vuint[]",
    attackModeSkill: "vuint",
    leaderTalent: "vuint",
    extraAbilities: "string[]",
    talents: "vuint[]",
    talentStarName: "string",
    coreProudSkillGroupId: "vuint",
    coreProudAvatarPromoteLevel: "vuint",
    inherentProudSkillOpens: "ProudSkillOpenConfig[]",
    skillDepotAbilityGroup: "string",
    Unk3850_sus: "vuint",
  },
}

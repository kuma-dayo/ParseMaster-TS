import { ConfigDefault } from "../"

export const ProudSkillExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "BaseTalentConfig",
  Fields: {
    proudSkillId: "vuint",
    proudSkillGroupId: "vuint",
    level: "vuint",
    proudSkillType: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    unlockDescTextMapHash: "vuint",
    icon: "string",
    coinCost: "vuint",
    costItems: "IdCountConfig[]",
    filterConds: "TalentFilterCond[]",
    breakLevel: "vuint",
    paramDescList: "vuint[]",
    lifeEffectType: "ProudLifeEffectType",
    lifeEffectParams: "string[]",
    effectiveForTeam: "byte",
    isHideLifeProudSkill: "bool",
  },
}

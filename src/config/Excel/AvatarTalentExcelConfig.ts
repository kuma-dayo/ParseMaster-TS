import { ConfigDefault } from "../"

export const AvatarTalentExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "BaseTalentConfig",
  Fields: {
    talentId: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    icon: "string",
    prevTalent: "vuint",
    mainCostItemId: "vuint",
    mainCostItemCount: "vuint",
    viceCostItemId: "vuint",
    viceCostItemCount: "vuint",
  },
}
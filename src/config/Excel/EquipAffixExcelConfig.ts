import { ConfigDefault } from "../"

export const EquipAffixExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "BaseTalentConfig",
  Fields: {
    affixId: "vuint",
    id: "vuint",
    level: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
  },
}
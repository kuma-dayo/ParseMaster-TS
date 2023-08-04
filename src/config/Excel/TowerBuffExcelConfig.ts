import { ConfigDefault } from ".."

export const TowerBuffExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    towerBuffId: "vuint",
    lastingType: "TowerBuffLastingType",
    descTextMapHash: "vuint",
    buffIcon: "string",
    buffId: "vuint",
  },
}

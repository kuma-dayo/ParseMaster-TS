import { ConfigDefault } from ".."

export const DieTypeTipsExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    dieType: "PlayerDieType",
    monsterID: "vuint",
    tips: "vuint[]",
  },
}

import { ConfigDefault } from ".."

export const MonsterSpecialNameExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    specialNameID: "vuint",
    specialNameLabID: "vuint",
    specialNameTextMapHash: "vuint",
    isInRandomList: "bool",
  },
}

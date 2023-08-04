import { ConfigDefault } from ".."

export const MonsterDescribeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    nameTextMapHash: "vuint",
    titleID: "vuint",
    specialNameLabID: "vuint",
    icon: "string",
  },
}

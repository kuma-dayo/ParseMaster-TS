import { ConfigDefault } from "../"

export const ReunionPrivilegeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    dailyNum: "vuint",
    totalNum: "vuint",
    privilegeType: "ReunionPrivilegeConfig[]",
  },
}

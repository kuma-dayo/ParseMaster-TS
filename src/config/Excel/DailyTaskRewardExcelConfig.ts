import { ConfigDefault } from ".."

export const DailyTaskRewardExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    dropVec: "DailyTaskDropConfig[]",
  },
}

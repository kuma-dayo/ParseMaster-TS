import { ConfigDefault } from "../"

export const ReminderIndexExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    reminderID: "vuint[]",
    showType: "ReminderShowType",
  },
}

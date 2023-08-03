import { ConfigDefault } from "../"

export const ActivityChessScheduleExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    day: "vuint",
    expUpLimit: "vuint",
    openMapList: "vuint[]",
    condID: "vuint",
  },
}

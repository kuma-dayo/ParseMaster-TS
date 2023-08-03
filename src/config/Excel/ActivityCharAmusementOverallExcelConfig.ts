import { ConfigDefault } from "../"

export const ActivityCharAmusementOverallExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    scheduleId: "vuint",
    dungeonId: "vuint",
    levelList: "vuint[]",
    randomLevelCount: "vuint",
  },
}

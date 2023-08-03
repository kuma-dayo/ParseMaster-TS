import { ConfigDefault } from "../"

export const H5ActivityWatcherExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "WatcherConfig",
  Fields: {
    h5ActivityId: "vuint",
    condComb: "LogicType",
    condList: "H5ActivityCondConfig[]",
    isDailyRefresh: "bool",
  },
}
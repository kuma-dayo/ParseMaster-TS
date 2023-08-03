import { ConfigDefault } from "../"

export const FlightActivityMedalExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    medal_icon: "string",
    daily_info: "FlightDailyInfo[]",
  },
}
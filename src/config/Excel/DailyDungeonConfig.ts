import { ConfigDefault } from "../"

export const DailyDungeonConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    monday: "vuint[]",
    tuesday: "vuint[]",
    wednesday: "vuint[]",
    thursday: "vuint[]",
    friday: "vuint[]",
    saturday: "vuint[]",
    sunday: "vuint[]",
  },
}

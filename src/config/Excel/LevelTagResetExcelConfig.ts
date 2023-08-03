import { ConfigDefault } from "../"

export const LevelTagResetExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    dungeonId: "vuint",
    seriesIdList: "vuint[]",
  },
}

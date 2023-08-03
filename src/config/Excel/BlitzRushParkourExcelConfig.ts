import { ConfigDefault } from "../"

export const BlitzRushParkourExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    openDay: "vuint",
    groupId: "vuint",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    watcherIdList: "vuint[]",
  },
}

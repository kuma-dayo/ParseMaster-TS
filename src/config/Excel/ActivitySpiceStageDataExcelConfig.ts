import { ConfigDefault } from "../"

export const ActivitySpiceStageDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    openDayIndex: "vuint",
    fetterIncCntLimit: "vuint",
    materialIdList: "vuint[]",
    materialNumList: "vuint[]",
    materialOrderList: "vuint[]",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    speed: "float",
    times: "vuint",
    clickNum: "vuint",
    clickZone: "vuint[]",
    watcherId: "vuint",
  },
}

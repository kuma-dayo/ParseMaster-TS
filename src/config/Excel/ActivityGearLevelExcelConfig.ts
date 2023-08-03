import { ConfigDefault } from "../"

export const ActivityGearLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    providedGears: "vuint[]",
    openDayIndex: "vuint",
    levelNameTextMapHash: "vuint",
    watcherID: "vuint",
    redpointIDSubPage: "vuint",
    redpointIDLevelSelect: "vuint",
  },
}

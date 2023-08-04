import { ConfigDefault } from ".."

export const LunaRiteSearchingExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    regionType: "LunaRiteRegionType",
    openDay: "vuint",
    progressWatcherID: "vuint",
    watcherID: "vuint[]",
    regionCenter: "float[]",
    regionNameHash: "vuint",
    regionRadius: "float",
    chestCond: "vuint",
    runeCond: "vuint",
    chestMarkNum: "vuint",
    runeMarkNum: "vuint",
  },
}

import { ConfigDefault } from ".."

export const HuntingRegionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    centerPosList: "float[]",
    centerRadius: "vuint",
    safeClueGroup: "vuint[]",
    clueGroup: "vuint[]",
    safeDestinationGroup: "vuint[]",
    destinationGroup: "vuint[]",
    regionInfoTextMapHash: "vuint",
    certainFinalMonsterId: "vuint[]",
  },
}

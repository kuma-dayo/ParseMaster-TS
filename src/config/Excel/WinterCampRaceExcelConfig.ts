import { ConfigDefault } from "../"

export const WinterCampRaceExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    openDay: "vuint",
    galleryId: "vuint",
    groupLinkID: "vuint",
    scoreWatcher: "vuint[]",
    scoreList: "vuint[]",
    timeFactor: "vuint",
    goldFactor: "vuint",
    limitedGoldFactor: "vuint",
    itemTips: "vuint[]",
  },
}

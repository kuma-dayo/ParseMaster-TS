import { ConfigDefault } from ".."

export const SalvageChallengeDataExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    playType: "SalvagePlayType",
    groupLinkId: "vuint",
    galleryId: "vuint",
    playerPointConfigId: "vuint[]",
    boatPointConfigId: "vuint[]",
    vehicleGadgetId: "vuint",
    watcherIds: "vuint[]",
  },
}

import { ConfigDefault } from ".."

export const WinterCampExploreExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    openDay: "vuint",
    priority: "vuint",
    groupID: "vuint",
    groupLinkID: "vuint",
    rewardID: "vuint",
    dropGroups: "WinterCampDropGroup[]",
  },
}

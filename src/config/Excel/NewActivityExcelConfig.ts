import { ConfigDefault } from "../"

export const NewActivityExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    activityId: "vuint",
    activityType: "NewActivityType",
    nameTextMapHash: "vuint",
    activitySceneTag: "string",
    isLoadTerrain: "bool",
    condGroupId: "vuint[]",
    watcherId: "vuint[]",
    isBanClientUi: "bool",
    activityCoinIdList: "vuint[]",
    dungeonIdList: "vuint[]",
  },
}

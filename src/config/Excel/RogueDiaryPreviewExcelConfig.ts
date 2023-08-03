import { ConfigDefault } from "../"

export const RogueDiaryPreviewExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    activityId: "vuint",
    blockSwitch: "bool",
    dungeonEntryId: "vuint",
    dungeonMarkId: "vuint",
    roomMarkId: "vuint",
    preWQIdList: "vuint[]",
    hiddenWQIdList: "vuint[]",
    preQuestIdList: "vuint[]",
    changeEntryCondId: "vuint",
    roomSceneId: "vuint",
    worldSceneId: "vuint",
  },
}

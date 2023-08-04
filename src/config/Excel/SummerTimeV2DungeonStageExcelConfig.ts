import { ConfigDefault } from ".."

export const SummerTimeV2DungeonStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    stageId: "vuint",
    dayIndex: "vuint",
    prevDungeonId: "vuint",
    cycleDungeonId: "vuint",
    watcherList: "vuint[]",
    questIdList: "vuint[]",
    questId: "vuint",
    entranceNameTextMapHash: "vuint",
    questNameTextMapHash: "vuint",
    questDescTextMapHash: "vuint",
    pushTipsId: "vuint",
    dungeonEntryId: "vuint",
    storyDungeonId1: "vuint",
    storyDungeonId2: "vuint",
    storyDungeonId3: "vuint",
    dungeonExhibitionIdList: "vuint[]",
    dungeonCardIdList: "vuint[]",
    storyStartCondId: "vuint",
    dungeonStartCondId: "vuint",
    dungeonRewardLimit: "vuint",
    dungeonEntryNameTextMapHash: "vuint",
  },
}

import { ConfigDefault } from "../"

export const ActivityPlantFlowerMainExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    scheduleId: "vuint",
    flowerIdList: "vuint[]",
    seedIdList: "vuint[]",
    maxWishFlowerKinds: "vuint",
    rewardPreviewId: "vuint",
    guaranteeStartTimes: "vuint",
    preQuestIdList: "vuint[]",
    openQuestId: "vuint",
    contentDay: "vuint",
    dailyConfigIdList: "vuint[]",
  },
}

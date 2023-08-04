import { ConfigDefault } from ".."

export const ActivityCharAmusementStageExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    stageId: "vuint",
    stageType: "ActivityCharAmusementStageType",
    levelList: "vuint[]",
    dayIndex: "vuint",
    stageNameTextMapHash: "vuint",
  },
}

import { ConfigDefault } from "../"

export const RoutineDetailExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    routineId: "vuint",
    routineType: "GeneralRoutineType",
    groupId: "vuint",
    tag: "vuint",
    is_backup: "bool",
    rewardId: "vuint",
    finishContent: "RoutineFinishContent",
    condComb: "LogicType",
    condVec: "RoutineCondContent[]",
    actionVec: "RoutineActionContent[]",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    goalTextMapHash: "vuint",
    centerPosition: "string",
    radarRadius: "vuint",
    enterDistance: "vuint",
    exitDistance: "vuint",
  },
}
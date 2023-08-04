import { ConfigDefault } from ".."

export const RoutineTypeExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    routineType: "GeneralRoutineType",
    refreshNum: "vuint",
    rewardLimitNum: "vuint",
    refreshId: "vuint",
    delayUnloadTime: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
    icon: "string",
  },
}

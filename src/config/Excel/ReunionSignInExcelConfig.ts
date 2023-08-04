import { ConfigDefault } from ".."

export const ReunionSignInExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    dayIndex: "vuint",
    rewardId: "vuint[]",
  },
}

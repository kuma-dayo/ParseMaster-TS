import { ConfigDefault } from ".."

export const EchoShellRewardExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    rewardId: "vuint",
    shellCount: "vuint",
    showAtTop: "bool",
  },
}

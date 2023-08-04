import { ConfigDefault } from ".."

export const FetterConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    fetterId: "vuint",
    avatarId: "vuint",
    openConds: "FetterConditionConfig[]",
    finishConds: "FetterConditionConfig[]",
    concealConds: "FetterConditionConfig[]",
  },
}

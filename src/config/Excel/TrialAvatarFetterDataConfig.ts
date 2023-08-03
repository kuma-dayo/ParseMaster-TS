import { ConfigDefault } from "../"

export const TrialAvatarFetterDataConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    avatarId: "vuint",
    fetterId: "vuint",
    finishCond: "TrialFetterConditionConfig",
  },
}

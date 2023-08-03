import { ConfigDefault } from "../"

export const ReviveDeadAvatar: ConfigDefault = {
  attribute: [],
  baseClass: "ReviveAvatar",
  Fields: {
    isReviveOtherPlayerAvatar: "bool",
    skillID: "vuint",
    cdRatio: "DynamicFloat",
    range: "float",
  },
}

import { ConfigDefault } from ".."

export const CustomLevelComponentLimitConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    limitId: "vuint",
    componentID: "vuint",
    maxCount: "vuint",
  },
}

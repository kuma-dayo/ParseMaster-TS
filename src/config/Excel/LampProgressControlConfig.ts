import { ConfigDefault } from "../"

export const LampProgressControlConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    hour: "vuint",
    minProgress: "vuint",
    maxProgress: "vuint",
  },
}
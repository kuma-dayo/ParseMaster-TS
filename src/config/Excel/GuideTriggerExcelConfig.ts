import { ConfigDefault } from ".."

export const GuideTriggerExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    guideName: "string",
    type: "GuideTriggerType",
    param1: "vuint",
    openState: "OpenStateType",
  },
}

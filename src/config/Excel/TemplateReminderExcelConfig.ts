import { ConfigDefault } from "../"

export const TemplateReminderExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    style: "TemplateReminderStyleType",
    icon: "string",
    titleTextMapHash: "vuint",
    contentTextMapHash: "vuint",
    activityType: "NewActivityType",
    showTime: "float",
    param: "string",
    NMCDMEBDPCN: "bool",
  },
}
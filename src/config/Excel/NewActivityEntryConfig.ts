import { ConfigDefault } from ".."

export const NewActivityEntryConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityType: "NewActivityType",
    sortPriority: "vint",
    tabIcon: "string",
    bannerPath: "string",
    bannerEffect: "string",
    tabNameTextMapHash: "vuint",
    duration: "vuint",
  },
}

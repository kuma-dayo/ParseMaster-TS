import { ConfigDefault } from ".."

export const NewActivityPushTipsConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    pushTipsId: "vuint",
    titleTextMapHash: "vuint",
    subtitleTextMapHash: "vuint",
    showIcon: "string",
    tabIcon: "string",
    tutorialId: "vuint",
    showImmediately: "bool",
    activityId: "vuint",
  },
}

import { ConfigDefault } from ".."

export const ContextActionSetTextWithMainQuestName: ConfigDefault = {
  attribute: [],
  baseClass: "ContextAction",
  Fields: {
    uiElement: "ActivityBannerUIElementType",
    textMap: "string",
    mainQuestId: "vuint",
  },
}

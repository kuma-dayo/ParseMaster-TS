import { ConfigDefault } from ".."

export const QuestGuide: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    type: "QuestGuideType",
    autoGuide: "QuestGuideAuto",
    param: "string[]",
    guideScene: "vuint",
    guideStyle: "QuestGuideStyle",
    guideLayer: "QuestGuideLayer",
  },
}

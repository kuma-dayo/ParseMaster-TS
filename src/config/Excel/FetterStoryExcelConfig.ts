import { ConfigDefault } from ".."

export const FetterStoryExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "FetterConfig",
  Fields: {
    isHiden: "bool",
    storyTitleTextMapHash: "vuint",
    storyContextTextMapHash: "vuint",
    storyTitle2TextMapHash: "vuint",
    storyContext2TextMapHash: "vuint",
    tips: "vuint[]",
    storyTitleLockedTextMapHash: "vuint",
  },
}

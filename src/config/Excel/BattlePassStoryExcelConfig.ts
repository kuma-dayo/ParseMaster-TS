import { ConfigDefault } from "../"

export const BattlePassStoryExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    storyUnlockLevel: "vuint[]",
    storyId: "vuint[]",
    storyTitle: "vuint[]",
  },
}

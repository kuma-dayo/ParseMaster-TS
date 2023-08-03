import { ConfigDefault } from "../"

export const DungeonEntry: ConfigDefault = {
  attribute: [],
  baseClass: "SceneTransPoint",
  Fields: {
    dungeonIds: "vuint[]",
    dungeonQuestConditionList: "DungeonQuestCondition",
    size: "Vector",
    worktopGroupId: "vuint",
    titleTextID: "string",
    showLevel: "vint",
    dungeonRandomList: "vuint[]",
    dungeonEntryType: "DungeonEntryType",
    forbidSimpleUnlock: "bool",
    fireFieldEvent: "bool",
    dungeonRosterList: "vuint[]",
    removeEntityIfLocked: "bool",
  },
}
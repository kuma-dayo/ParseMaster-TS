import { ConfigDefault } from "../"

export const ConfigCrowdQuestRestriction: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    questID: "vuint",
    questAccepted: "bool",
    questStates: "QuestState[]",
  },
}

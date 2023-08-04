import { ConfigDefault } from ".."

export const FindHilichurlAssignmentExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    index: "vuint",
    dayIndex: "vuint",
    questID: "vuint",
    assignmentType: "FindHilichurlAssignmentType",
    keyWord: "string",
    hintSubQuestId: "vuint",
  },
}

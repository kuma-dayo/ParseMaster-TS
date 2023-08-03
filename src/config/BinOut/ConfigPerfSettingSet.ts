import { ConfigDefault } from "../"

export const ConfigPerfSettingSet: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    numberItems: "map<string,ConfigPerfNumberItem>",
    numberArrayItems: "map<string,ConfigPerfNumberArrayItem>",
    stringKeyItems: "map<string,ConfigPerfStringKeyItem>",
    gradeItems: "map<string,ConfigPerfGradeItem>",
    boolItems: "map<string,ConfigPerfBoolItem>",
    combinedItems: "map<string,ConfigPerfCombinedItem>",
  },
}
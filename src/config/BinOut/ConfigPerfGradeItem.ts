import { ConfigDefault } from ".."

export const ConfigPerfGradeItem: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigPerfItemBase",
  Fields: {
    deviceSpecItem: "map<string,vint>",
    itemOptionMap: "map<string,ConfigPerfGradeItemOptionArrayInfo>",
    overrideMap: "map<string,ConfigPerfGradeItemOverrideInfo>",
  },
}

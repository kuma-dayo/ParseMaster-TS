import { ConfigDefault } from "../"

export const ActivitySumoSwitchSkillExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    Id: "vuint",
    abilityGroupName: "string",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    descParam: "string[]",
    iconNameHash: "vuint",
  },
}

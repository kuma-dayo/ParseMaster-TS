import { ConfigDefault } from "../"

export const ActivityPotionBuffExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    buffId: "vuint",
    abilityGroupName: "string",
    quality: "vuint",
    titleTextMapHash: "vuint",
    descTextMapHash: "vuint",
    descParam: "string[]",
    iconHash: "vuint",
    buffElement: "string",
  },
}

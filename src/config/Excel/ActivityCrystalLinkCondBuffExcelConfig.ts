import { ConfigDefault } from "../"

export const ActivityCrystalLinkCondBuffExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    buffId: "vuint",
    abilityGroupName: "string",
    abilityName: "string",
    AbilityTitleTextMapHash: "vuint",
    AbilityDescTextMapHash: "vuint",
    iconNameHash: "vuint",
    desParam: "string[]",
  },
}

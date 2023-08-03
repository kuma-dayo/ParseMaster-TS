import { ConfigDefault } from "../"

export const AddTalentExtraLevel: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigTalentMixin",
  Fields: {
    talentType: "TalentType",
    talentIndex: "vuint",
    extraLevel: "vuint",
  },
}
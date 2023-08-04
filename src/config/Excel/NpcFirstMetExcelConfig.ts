import { ConfigDefault } from ".."

export const NpcFirstMetExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    subQuestIdList: "vuint[]",
    avatarID: "vuint",
    avatarDescriptionTextMapHash: "vuint",
  },
}

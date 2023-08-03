import { ConfigDefault } from "../"

export const AvatarCodexExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    sortId: "vuint",
    sortFactor: "vuint",
    avatarId: "vuint",
    beginTime: "string",
    hideWhenDontHave: "bool",
  },
}

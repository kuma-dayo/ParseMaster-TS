import { ConfigDefault } from "../"

export const ActivityUpAvatarExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    activityId: "vuint",
    nameTextMapHash: "vuint",
    avatarIdList: "vuint[]",
  },
}

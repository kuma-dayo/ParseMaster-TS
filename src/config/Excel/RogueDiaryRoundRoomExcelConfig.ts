import { ConfigDefault } from "../"

export const RogueDiaryRoundRoomExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    HardRoomCount: "vuint",
    roomTypeConfigList: "RogueDiaryRoomTypeConfig[]",
  },
}
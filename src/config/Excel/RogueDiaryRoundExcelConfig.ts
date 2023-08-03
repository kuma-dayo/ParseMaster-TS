import { ConfigDefault } from "../"

export const RogueDiaryRoundExcelConfig: ConfigDefault = {
  attribute: ["excel", "nozig"],
  baseClass: null,
  Fields: {
    RoomCount: "vuint",
    roundRoomConfigList: "vuint[]",
    hpCorrection: "vuint",
  },
}

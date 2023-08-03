import { ConfigDefault } from "../"

export const ConfigCustomLevelDungeon: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    dungeonID: "vuint",
    startRoomId: "vuint",
    roomList: "ConfigCustomLevelRoomSetting[]",
  },
}

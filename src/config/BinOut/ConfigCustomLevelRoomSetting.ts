import { ConfigDefault } from "../"

export const ConfigCustomLevelRoomSetting: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    roomID: "vuint",
    componentLimitConfig: "vuint",
    playerInitPos: "Vector",
    playerInitRot: "Vector",
    basicData: "ConfigCustomLevelRoomBasic",
    extraData: "ConfigCustomLevelRoomExtraData[]",
  },
}
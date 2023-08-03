import { ConfigDefault } from "../"

export const ConfigCustomLevelRoomBasic: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    deployStartPos: "Vector",
    deployBound: "Vector",
    totalCost: "vuint",
    preRooms: "vuint[]",
    nextRooms: "vuint[]",
    bornPos: "Vector",
    bornRot: "Vector",
  },
}

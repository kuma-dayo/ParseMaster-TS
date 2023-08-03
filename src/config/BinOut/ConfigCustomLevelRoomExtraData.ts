import { ConfigDefault } from "../"

export const ConfigCustomLevelRoomExtraData: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    index: "vuint",
    occupyPos: "Vector",
    occupyBound: "Vector",
    pileTags: "PileTag[]",
    isGadget: "bool",
    configID: "vuint",
    gadgetRot: "Vector",
  },
}

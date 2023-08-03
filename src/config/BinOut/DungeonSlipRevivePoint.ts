import { ConfigDefault } from "../"

export const DungeonSlipRevivePoint: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigScenePoint",
  Fields: {
    size: "Vector",
    isActive: "bool",
    groupIds: "vuint[]",
    disableClientTrigger: "bool",
  },
}
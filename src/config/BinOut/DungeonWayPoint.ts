import { ConfigDefault } from "../"

export const DungeonWayPoint: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigScenePoint",
  Fields: {
    size: "Vector",
    isBoss: "bool",
    isActive: "bool",
    groupIds: "vuint[]",
    disableClientTrigger: "bool",
  },
}

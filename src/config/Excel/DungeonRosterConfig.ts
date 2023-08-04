import { ConfigDefault } from ".."

export const DungeonRosterConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    openTimeStr: "string",
    cycleTime: "vuint",
    cycleType: "DungeonRosterCycleType",
    rosterPool: "DungeonList[]",
  },
}

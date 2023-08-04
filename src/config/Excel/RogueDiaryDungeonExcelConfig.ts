import { ConfigDefault } from ".."

export const RogueDiaryDungeonExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    dungeonId: "vuint",
    groupList: "vuint[]",
    roundList: "RogueDiaryRoundExcelConfig[]",
  },
}

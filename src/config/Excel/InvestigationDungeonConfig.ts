import { ConfigDefault } from "../"

export const InvestigationDungeonConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    entranceId: "vuint",
    cityId: "vuint",
    dungeonIdList: "vuint[]",
  },
}

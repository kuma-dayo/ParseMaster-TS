import { ConfigDefault } from "../"

export const RoomWeatherExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    roomID: "vuint",
    areaID: "vuint",
    profileName: "string",
  },
}

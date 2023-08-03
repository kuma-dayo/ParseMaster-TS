import { ConfigDefault } from "../"

export const MapAreaConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    type: "MapAreaType",
    sceneID: "vuint",
    name: "string",
    areaID_1: "vuint[]",
    scenePointID: "vuint",
    mapAreaState: "MapAreaState",
  },
}

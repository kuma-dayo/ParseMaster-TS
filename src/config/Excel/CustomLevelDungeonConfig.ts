import { ConfigDefault } from "../"

export const CustomLevelDungeonConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    dungeonID: "vuint",
    order: "vuint",
    jsonPath: "string",
    mapPrefabPath: "string",
    mapScenePicHash: "vuint",
    dataPicHash: "vuint",
    roomNum: "vuint",
    roomNameFormatTextMapHash: "vuint",
    corridors: "string",
    countBrickList: "vuint[]",
  },
}

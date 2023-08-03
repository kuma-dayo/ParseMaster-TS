import { ConfigDefault } from "../"

export const ConfigScene: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    transRadius: "float",
    points: "map<string,ConfigScenePoint>",
    areas: "map<string,ConfigSceneArea>",
    forces: "map<string,ConfigForceField>",
    entities: "map<string,ConfigLocalEntity>",
    doors: "map<string,ConfigLoadingDoor>",
  },
}

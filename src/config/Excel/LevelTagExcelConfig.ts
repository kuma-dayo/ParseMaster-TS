import { ConfigDefault } from "../"

export const LevelTagExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    ID: "vuint",
    levelTagName: "string",
    sceneId: "vuint",
    addSceneTagIdList: "vuint[]",
    removeSceneTagIdList: "vuint[]",
    levelTagCanFixTime: "bool",
    levelTagFixedEnviroTime: "float",
    loadDynamicGroupList: "vuint[]",
  },
}
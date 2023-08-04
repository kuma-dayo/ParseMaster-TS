import { ConfigDefault } from ".."

export const DungeonLevelEntityConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    clientId: "vuint",
    id: "vuint",
    show: "bool",
    levelConfigName: "string",
    descTextMapHash: "vuint",
    switchTitleTextMapHash: "vuint",
  },
}

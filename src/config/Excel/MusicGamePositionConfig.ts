import { ConfigDefault } from "../"

export const MusicGamePositionConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    interNPCID: "vuint",
    npcPosition: "float[]",
    npcRotation: "float",
    npcID: "vuint",
    markID: "vuint",
    freeStyleID: "vuint",
    banConfig: "string",
  },
}
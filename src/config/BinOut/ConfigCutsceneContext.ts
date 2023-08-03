import { ConfigDefault } from "../"

export const ConfigCutsceneContext: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    type: "CutsceneIndexType",
    enableForceStreaming: "bool",
    cutsceneConfig: "ConfigTimeline",
    videoConfig: "ConfigVideo",
  },
}

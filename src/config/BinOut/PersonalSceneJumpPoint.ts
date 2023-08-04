import { ConfigDefault } from ".."

export const PersonalSceneJumpPoint: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigScenePoint",
  Fields: {
    tranSceneId: "vuint",
    titleTextID: "string",
    triggerSize: "Vector",
    open_time: "float",
    close_time: "float",
    isHomeworldDoor: "bool",
  },
}

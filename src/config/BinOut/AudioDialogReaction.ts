import { ConfigDefault } from "../"

export const AudioDialogReaction: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    dialogId: "vuint",
    stateOpsOnStart: "AudioStateOp[]",
    stateOpsOnFinish: "AudioStateOp[]",
    eventOnStart: "ConfigWwiseString",
    eventOnFinish: "ConfigWwiseString",
  },
}

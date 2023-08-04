import { ConfigDefault } from ".."

export const ConfigGadgetTurn: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    movePartAroundX: "string",
    anchorPartAroundX: "string",
    movePartAroundY: "string",
    anchorPartAroundY: "string",
    movePartAroundZ: "string",
    anchorPartAroundZ: "string",
    audioBeginTurningEvent: "ConfigWwiseString",
    audioStopTurningEvent: "ConfigWwiseString",
    audioBeginTurningEventAroundX: "ConfigWwiseString",
    audioStopTurningEventAroundX: "ConfigWwiseString",
    audioBeginTurningEventAroundY: "ConfigWwiseString",
    audioStopTurningEventAroundY: "ConfigWwiseString",
    audioBeginTurningEventAroundZ: "ConfigWwiseString",
    audioStopTurningEventAroundZ: "ConfigWwiseString",
    turnStateMap: "map<vuint,ConfigGadgetTurnState>",
  },
}

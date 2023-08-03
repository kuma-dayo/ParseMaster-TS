import { ConfigDefault } from "../"

export const ConfigNpc: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigCharacter",
  Fields: {
    defaultDither: "float",
    useShape: "bool",
    disappearDuration: "float",
    aibeta: "ConfigAIBeta",
    move: "ConfigMove",
    intee: "ConfigIntee",
    audio: "ConfigGadgetAudio",
    emojiBubble: "ConfigEmojiBubble",
    elementPendantPoint: "string",
  },
}

import { ConfigDefault } from "../"

export const ConfigElementUI: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    showIconEntityTypes: "EntityType[]",
    showReactionEntityTypes: "EntityType[]",
    iconRecoverTime: "float",
    iconDisappearTime: "float",
    iconDisappearRound: "vuint",
    iconShowDistance: "float",
    overrideElemPath: "map<string,string>",
    reactionElemPath: "map<ElementReactionType,string>",
  },
}
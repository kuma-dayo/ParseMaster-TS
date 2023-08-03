import { ConfigDefault } from "../"

export const ConfigAnimator: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    freeStyleStateMap: "map<vint,string[]>",
    stateAnimeMap: "map<string,vuint>",
    logicStateMap: "map<AnimeGroupType,ConfigAnimGroup>",
  },
}

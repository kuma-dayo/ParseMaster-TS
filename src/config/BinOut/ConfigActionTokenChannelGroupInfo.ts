import { ConfigDefault } from ".."

export const ConfigActionTokenChannelGroupInfo: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    lowLevelDist: "float",
    lowLevelDistToken: "map<EntityTokenActionType,ConfigEntityActionTokenGroup>",
    actionSourceToken: "map<ActionTokenSourceType,map<EntityTokenActionType,ConfigEntityActionTokenGroup>>",
    cfg: "map<vint,ConfigActionTokenChannel>",
  },
}

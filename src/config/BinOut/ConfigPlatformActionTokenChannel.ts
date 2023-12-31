//Auto Generated by ConfigParser
import { ConfigDefault } from ".."

export const ConfigPlatformActionTokenChannel: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    highEntityTypes: "EntityType[]",
    lowEntityTypes: "EntityType[]",
    entityTypeToken: "map<EntityTokenActionType,ConfigEntityActionTokenGroup>",
    defaultCfg: "ConfigActionTokenChannelGroupInfo",
    platformCfg: "map<string,ConfigActionTokenChannelGroupInfo>",
    actionConsumeTokenLimit: "map<EntityTokenActionType,vint>",
  },
}

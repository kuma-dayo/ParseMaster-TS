import { ConfigDefault } from "../"

export const FollowAttachPointEffectMixin: ConfigDefault = {
  attribute: [],
  baseClass: "ConfigAbilityMixin",
  Fields: {
    modifierName: "string",
    attachPriority: "FollowAttachOccupyPriority",
    refreshOnAvatarIn: "bool",
  },
}

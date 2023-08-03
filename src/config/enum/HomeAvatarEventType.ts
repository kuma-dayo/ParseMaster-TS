import { EnumDefault } from "."

enum types {
  HOME_AVATAR_EVENT_NONE = 0,
  HOME_AVATAR_REWARD_EVENT = 1,
  HOME_AVATAR_SUMMON_EVENT = 2,
}

export const HomeAvatarEventType: EnumDefault = {
  __signed: true,
  types: types,
}

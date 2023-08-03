import { EnumDefault } from "."

enum types {
  PLAY_MODE_ALL = 0,
  PLAY_MODE_SINGLE = 1,
  PLAY_MODE_MULTIPLE = 2,
  PLAY_MODE_HOST = 3,
  PLAY_MODE_GUEST = 4,
}

export const PlayMode: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  None = 0,
  LocalAvatar = 1,
  Team = 2,
}

export const WatcherSystemListenType: EnumDefault = {
  __signed: true,
  types: types,
}

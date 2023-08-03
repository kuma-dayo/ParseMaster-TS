import { EnumDefault } from "."

enum types {
  NoDelay = 0,
  Normal = 1,
  Long = 2,
}

export const MovePlatformDelayType: EnumDefault = {
  __signed: true,
  types: types,
}

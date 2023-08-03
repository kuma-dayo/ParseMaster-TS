import { EnumDefault } from "."

enum types {
  None = 0,
  Linear = 1,
  Angular = 2,
  Both = 3,
}

export const AudioPlatformMoveType: EnumDefault = {
  __signed: true,
  types: types,
}
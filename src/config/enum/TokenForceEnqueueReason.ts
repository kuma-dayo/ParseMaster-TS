import { EnumDefault } from "."

enum types {
  ElementReaction = 0,
  AbilityState = 1,
}

export const TokenForceEnqueueReason: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  Mushroom = 0,
  Fire = 1,
  Electric = 2,
  MushroomVariation = 3,
}

export const ReactionTriggerType: EnumDefault = {
  __signed: true,
  types: types,
}

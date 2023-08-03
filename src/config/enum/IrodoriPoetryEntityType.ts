import { EnumDefault } from "."

enum types {
  IRODORI_POETRY_ENTITY_TYPE_NONE = 0,
  IRODORI_POETRY_ENTITY_TYPE_EMPTY_GADGET = 1,
  IRODORI_POETRY_ENTITY_TYPE_GATHER = 2,
  IRODORI_POETRY_ENTITY_TYPE_MONSTER = 3,
}

export const IrodoriPoetryEntityType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  DESTROY_NONE = 0,
  DESTROY_RETURN_MATERIAL = 1,
}

export const MaterialDestroyType: EnumDefault = {
  __signed: true,
  types: types,
}
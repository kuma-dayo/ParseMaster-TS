import { EnumDefault } from "."

enum types {
  Entity = 0,
  Actor = 1,
}

export const PropertyType: EnumDefault = {
  __signed: true,
  types: types,
}
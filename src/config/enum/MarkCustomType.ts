import { EnumDefault } from "."

enum types {
  RedCircle = 0,
  BlueCircle = 1,
  OTHER = 2,
}

export const MarkCustomType: EnumDefault = {
  __signed: true,
  types: types,
}

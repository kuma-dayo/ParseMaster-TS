import { EnumDefault } from "."

enum types {
  OnlyHighSpeed = 0,
  Always = 1,
  Never = 2,
}

export const CCDType: EnumDefault = {
  __signed: true,
  types: types,
}

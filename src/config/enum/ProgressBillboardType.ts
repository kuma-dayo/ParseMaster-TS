import { EnumDefault } from "."

enum types {
  General = 0,
  Miracle = 1,
  Cook = 2,
}

export const ProgressBillboardType: EnumDefault = {
  __signed: true,
  types: types,
}

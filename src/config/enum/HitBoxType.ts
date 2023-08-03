import { EnumDefault } from "."

enum types {
  Normal = 0,
  Head = 1,
  Weakness1 = 2,
  Weakness2 = 3,
  Weakness3 = 4,
  Weakness4 = 5,
}

export const HitBoxType: EnumDefault = {
  __signed: true,
  types: types,
}

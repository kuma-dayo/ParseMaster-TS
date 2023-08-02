import { EnumDefault } from "."

enum types {
  BODY_NONE = 0,
  BODY_BOY = 1,
  BODY_GIRL = 2,
  BODY_LADY = 3,
  BODY_MALE = 4,
  BODY_LOLI = 5,
}

export const BodyType: EnumDefault = {
  __signed: true,
  types: types,
}

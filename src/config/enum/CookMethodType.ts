import { EnumDefault } from "."

enum types {
  COOK_METHOD_NONE = 0,
  COOK_METHOD_STEAM = 1,
  COOK_METHOD_BOIL = 2,
  COOK_METHOD_FRY = 3,
  COOK_METHOD_BAKE = 4,
}

export const CookMethodType: EnumDefault = {
  __signed: true,
  types: types,
}

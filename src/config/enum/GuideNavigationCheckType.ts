import { EnumDefault } from "."

enum types {
  NONE = 0,
  OPEN = 1,
  CLOSE = 2,
}

export const GuideNavigationCheckType: EnumDefault = {
  __signed: true,
  types: types,
}

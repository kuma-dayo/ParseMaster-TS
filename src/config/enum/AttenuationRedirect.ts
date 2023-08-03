import { EnumDefault } from "."

enum types {
  OriginOwner = 0,
  Owner = 1,
  None = 2,
}

export const AttenuationRedirect: EnumDefault = {
  __signed: true,
  types: types,
}

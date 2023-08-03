import { EnumDefault } from "."

enum types {
  None = 0,
  Owner = 1,
  OriginOwner = 2,
}

export const CanBeModifiedBy: EnumDefault = {
  __signed: true,
  types: types,
}
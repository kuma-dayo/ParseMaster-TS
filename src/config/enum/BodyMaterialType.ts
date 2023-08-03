import { EnumDefault } from "."

enum types {
  All = 0,
  Body = 1,
  Hair = 2,
  Face = 3,
  Weapon = 4,
  Arm = 5,
  InValid = 999,
}

export const BodyMaterialType: EnumDefault = {
  __signed: true,
  types: types,
}

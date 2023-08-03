import { EnumDefault } from "."

enum types {
  Move = 0,
  Scale = 1,
}

export const GuideCameraAction: EnumDefault = {
  __signed: true,
  types: types,
}
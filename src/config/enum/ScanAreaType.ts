import { EnumDefault } from "."

enum types {
  Rectangle = 0,
  Ellipse = 1,
}

export const ScanAreaType: EnumDefault = {
  __signed: true,
  types: types,
}
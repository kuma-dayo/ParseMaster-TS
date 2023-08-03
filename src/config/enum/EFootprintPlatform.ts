import { EnumDefault } from "."

enum types {
  all = 0,
  allNoTessellation = 1,
  PCNoTessellation = 2,
  pc = 3,
  android = 4,
  ios = 5,
  ps4 = 6,
  ps = 7,
}

export const EFootprintPlatform: EnumDefault = {
  __signed: true,
  types: types,
}

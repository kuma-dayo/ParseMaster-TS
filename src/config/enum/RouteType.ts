import { EnumDefault } from "."

enum types {
  OneWay = 0,
  Reciprocate = 1,
  Loop = 2,
}

export const RouteType: EnumDefault = {
  __signed: true,
  types: types,
}

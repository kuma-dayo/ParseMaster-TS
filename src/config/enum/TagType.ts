import { EnumDefault } from "."

enum types {
  Climable = 0,
  Airwall = 1,
  AirwallNS = 2,
  AirwallPTNS = 3,
}

export const TagType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  MICHIAE_MATSURI_RADAR_MARK_TYPE_NONE = 0,
  MICHIAE_MATSURI_RADAR_MARK_TYPE_CHEST = 1,
  MICHIAE_MATSURI_RADAR_MARK_TYPE_CHALLENGE = 2,
}

export const MichiaeMatsuriRadarMarkType: EnumDefault = {
  __signed: true,
  types: types,
}

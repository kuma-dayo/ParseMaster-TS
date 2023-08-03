import { EnumDefault } from "."

enum types {
  REFRESH_NONE = 0,
  REFRESH_INTERVAL = 1,
  REFRESH_DAILY = 2,
  REFRESH_WEEKlY = 3,
  REFRESH_DAYBEGIN_INTERVAL = 4,
}

export const RefreshType: EnumDefault = {
  __signed: true,
  types: types,
}

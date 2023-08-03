import { EnumDefault } from "."

enum types {
  SETTLE_UI_AlWAYS_SHOW = 0,
  SETTLE_UI_ON_SUCCESS = 1,
  SETTLE_UI_ON_FAIL = 2,
  SETTLE_UI_NEVER_SHOW = 3,
}

export const SettleUIType: EnumDefault = {
  __signed: true,
  types: types,
}

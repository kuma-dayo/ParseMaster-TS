import { EnumDefault } from "."

enum types {
  MONITOR_NEVER = 0,
  MONITOR_OFF_STAGE = 1,
  MONITOR_ON_STAGE = 2,
  MONITOR_ALWAYS = 3,
}

export const MonitorType: EnumDefault = {
  __signed: true,
  types: types,
}

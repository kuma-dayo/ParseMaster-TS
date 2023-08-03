import { EnumDefault } from "."

enum types {
  Resident = 1,
  Activity = 2,
}

export const WidgetBusinessType: EnumDefault = {
  __signed: true,
  types: types,
}

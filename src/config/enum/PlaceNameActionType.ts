import { EnumDefault } from "."

enum types {
  Default = 0,
  Open = 1,
  Close = 2,
  SwitchName = 3,
}

export const PlaceNameActionType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  Default = 0,
  Quest = 1,
  MapArea = 2,
  ErosionArea = 3,
}

export const PlaceNameConditionType: EnumDefault = {
  __signed: true,
  types: types,
}

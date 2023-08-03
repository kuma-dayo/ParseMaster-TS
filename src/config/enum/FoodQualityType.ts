import { EnumDefault } from "."

enum types {
  FOOD_QUALITY_NONE = 0,
  FOOD_QUALITY_STRANGE = 1,
  FOOD_QUALITY_ORDINARY = 2,
  FOOD_QUALITY_DELICIOUS = 3,
}

export const FoodQualityType: EnumDefault = {
  __signed: true,
  types: types,
}

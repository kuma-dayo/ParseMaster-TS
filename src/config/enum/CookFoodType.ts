import { EnumDefault } from "."

enum types {
  COOK_FOOD_NONE = 0,
  COOK_FOOD_HEAL = 1,
  COOK_FOOD_ATTACK = 2,
  COOK_FOOD_FUNCTION = 3,
  COOK_FOOD_DEFENSE = 4,
  COOK_RECIPE = 5,
}

export const CookFoodType: EnumDefault = {
  __signed: true,
  types: types,
}
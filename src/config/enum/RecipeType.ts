import { EnumDefault } from "."

enum types {
  RECIPE_TYPE_NONE = 0,
  RECIPE_TYPE_COMBINE = 1,
  RECIPE_TYPE_CONVERT = 2,
  RECIPE_TYPE_COMBINE_HOMEWORLD = 3,
}

export const RecipeType: EnumDefault = {
  __signed: true,
  types: types,
}

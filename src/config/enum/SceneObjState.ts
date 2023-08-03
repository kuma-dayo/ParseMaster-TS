import { EnumDefault } from "."

enum types {
  Normal = 0,
  Burning = 1,
  Burned = 2,
  Cut = 3,
  Frozen = 4,
  Melt = 5,
}

export const SceneObjState: EnumDefault = {
  __signed: true,
  types: types,
}

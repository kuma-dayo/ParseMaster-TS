import { EnumDefault } from "."

enum types {
  onCreate = 0,
  onCombat = 1,
  onSceneDataNotify = 2,
}

export const ConfigPreloadType: EnumDefault = {
  __signed: true,
  types: types,
}

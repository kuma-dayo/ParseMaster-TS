import { EnumDefault } from "."

enum types {
  INCLUSIVE = 0,
  EXCLUSIVE = 1,
}

export const CrowdSpawnConditionType: EnumDefault = {
  __signed: true,
  types: types,
}

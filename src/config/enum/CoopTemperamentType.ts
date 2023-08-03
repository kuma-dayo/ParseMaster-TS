import { EnumDefault } from "."

enum types {
  COOP_TEMPERAMENT_1 = 1,
  COOP_TEMPERAMENT_2 = 2,
  COOP_TEMPERAMENT_3 = 3,
  COOP_TEMPERAMENT_4 = 4,
}

export const CoopTemperamentType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  MichiaeMatsuri = 2500,
  LightStone = 2600,
}

export const RegionalPlayType: EnumDefault = {
  __signed: true,
  types: types,
}

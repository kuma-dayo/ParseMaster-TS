import { EnumDefault } from "."

enum types {
  None = 0,
  Ground = 1,
  Prop = 2,
  Airflow = 3,
  Spike = 4,
  WindCircle = 5,
  Bubble = 6,
}

export const PileTag: EnumDefault = {
  __signed: true,
  types: types,
}

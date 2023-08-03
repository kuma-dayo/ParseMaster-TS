import { EnumDefault } from "."

enum types {
  AQ = 0,
  FQ = 1,
  LQ = 2,
  EQ = 3,
  DQ = 4,
  IQ = 5,
  VQ = 6,
  WQ = 7,
}

export const QuestType: EnumDefault = {
  __signed: true,
  types: types,
}

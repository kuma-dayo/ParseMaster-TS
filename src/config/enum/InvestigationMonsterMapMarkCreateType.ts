import { EnumDefault } from "."

enum types {
  AfterUnlock = 0,
  NerverCreate = 1,
  ExtraConditions = 2,
}

export const InvestigationMonsterMapMarkCreateType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  INVESTIGATION_ADVENTURE = 0,
  INVESTIGATION_HOMEWORLD = 1,
  INVESTIGATION_EDCATION = 2,
}

export const InvestigationType: EnumDefault = {
  __signed: true,
  types: types,
}

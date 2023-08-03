import { EnumDefault } from "."

enum types {
  GROUP_RECORD_TYPE_NONE = 0,
  GROUP_RECORD_TYPE_RACING = 1,
  GROUP_RECORD_TYPE_BALLOON = 2,
  GROUP_RECORD_TYPE_STAKE = 3,
  GROUP_RECORD_TYPE_SEEK = 4,
}

export const GroupRecordType: EnumDefault = {
  __signed: true,
  types: types,
}

import { EnumDefault } from "."

enum types {
  REUNION_PRIVILEGE_TYPE_NONE = 0,
  REUNION_PRIVILEGE_TYPE_DUNGEON = 1,
  REUNION_PRIVILEGE_TYPE_BLOSSOM = 2,
}

export const ReunionPrivilegeType: EnumDefault = {
  __signed: true,
  types: types,
}

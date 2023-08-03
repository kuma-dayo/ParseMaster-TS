import { EnumDefault } from "."

enum types {
  ECHO_SHELL_TYPE_NORMAL_ECHO = 0,
  ECHO_SHELL_TYPE_SPECIAL_ECHO = 1,
  ECHO_SHELL_TYPE_NORMAL_IMAGE = 2,
  ECHO_SHELL_TYPE_SPECIAL_IMAGE = 3,
  ECHO_SHELL_TYPE_NORMAL_INTERACT = 4,
}

export const EchoShellType: EnumDefault = {
  __signed: true,
  types: types,
}

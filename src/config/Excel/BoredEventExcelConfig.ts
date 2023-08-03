import { ConfigDefault } from "../"

export const BoredEventExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    event_type: "BoardEventType",
    param: "vuint",
    is_enable: "bool",
    add_bored: "vint",
    max_bored: "vint",
  },
}

import { ConfigDefault } from ".."

export const OpenStateConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    defaultState: "bool",
    allowClientOpen: "bool",
    cond: "OpenStateCond[]",
    system_open_ui_id: "vuint",
  },
}

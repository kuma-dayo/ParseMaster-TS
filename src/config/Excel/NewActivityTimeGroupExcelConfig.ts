import { ConfigDefault } from ".."

export const NewActivityTimeGroupExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    groupIdList: "vuint[]",
    duration: "vuint[]",
  },
}

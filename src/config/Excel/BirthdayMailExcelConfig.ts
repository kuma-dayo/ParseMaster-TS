import { ConfigDefault } from ".."

export const BirthdayMailExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    mailId: "vuint",
    rewardId: "vuint",
    effectiveDate: "string",
    effectiveTimestamp: "vuint",
  },
}

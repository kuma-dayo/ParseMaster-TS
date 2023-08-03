import { ConfigDefault } from "../"

export const PhotographPosenameExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: "FetterConfig",
  Fields: {
    poseFile: "string",
    animatorstate_id: "vuint",
    poseIcon: "string",
    poseNameTextMapHash: "vuint",
    unlockDescTextMapHash: "vuint",
  },
}

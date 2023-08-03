import { ConfigDefault } from "../"

export const LanV2ProjectionExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    scheduleId: "vuint",
    sensitivityFreeRotation: "float",
    sensitivitySingleAxisRotation: "float",
    sensitivitySingleAxisTranslation: "float",
    sensitivityFreeRotationJoypad: "float",
    sensitivitySingleAxisRotationJoypad: "float",
    sensitivitySingleAxisTranslationJoypad: "float",
    pushTipsIdJoypad: "vuint",
    pushTipsIdTouch: "vuint",
    pushTipsIdMouse: "vuint",
    timeThresholdUnlockAnswer: "vuint",
    timeThresholdShowStandbyPrompt: "vuint",
    timeThresholdShowContinuousProgress: "vuint",
    leadGuides: "string[]",
    guides: "string[]",
    guideQuestId: "vuint",
    nameTextMapHash: "vuint",
    descTextMapHash: "vuint",
  },
}
import { ConfigDefault } from ".."

export const LanV2ProjectionLevelExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    levelId: "vuint",
    stageId: "vuint",
    watcherId: "vuint",
    levelNameTextMapHash: "vuint",
    iconSilhouette: "string",
    iconNormal: "string",
    endDialogIconOffsetX: "float",
    endDialogIconOffsetY: "float",
    endDialogIconScale: "float",
    sceneSuiteId: "vuint",
    rootPointSwitchButtonConfigId: "vuint",
    rootPointCorrectPose: "float[]",
    rootPointInitialPose: "float[]",
    rootPointMotionType: "LanV2ProjectionRootPointMotionType",
    rootPointFreeRotationTolerance: "float[]",
    rootPointSingleAxisRotationAxis: "float[]",
    rootPointSingleAxisRotationLimit: "float[]",
    rootPointSingleAxisRotationTolerance: "float",
    hierarchy: "vuint[][]",
    elementConfigs: "LanV2ProjectionElementConfig[]",
  },
}

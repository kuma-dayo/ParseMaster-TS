import { ConfigDefault } from "../"

export const ActivityGearGadgetGearExcelConfig: ConfigDefault = {
  attribute: ["excel"],
  baseClass: null,
  Fields: {
    id: "vuint",
    gadgetID: "vuint",
    gearRadius: "float[]",
    gearToothCount: "vuint[]",
    materialID: "vuint",
    gearCanNotPlaceEffect: "string",
    gearPlaceEffect: "string",
    coverUpEffect: "string",
  },
}

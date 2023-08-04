import { ConfigDefault } from ".."

export const ConfigTDPlay: ConfigDefault = {
  attribute: [],
  baseClass: null,
  Fields: {
    attackSpeed_C: "float",
    towerDatas: "map<TDPlayTowerType,ConfigTDPlayTowerData>",
  },
}

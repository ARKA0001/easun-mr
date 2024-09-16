import { atom } from "recoil";

export const potentialFreeCheckStore = atom({
  key: "potentialFreeCheckStore",
  default: {
    checkboxes: {},
  },
});

export const Section1DataStore = atom({
  key: "Section1DataStore",
  default: {},
});
export const Section2DataStore = atom({
  key: "Section2DataStore",
  default: {},
});
export const frontSideOptionsStore = atom({
  key: "frontSideOptionsStore",
  default: [],
});
export const backSideOptionsStore = atom({
  key: "backSideOptionsStore",
  default: [],
});
export const leftSideOptionsStore = atom({
  key: "leftSideOptionsStore",
  default: [],
});
export const rightSideOptionsStore = atom({
  key: "rightSideOptionsStore",
  default: [],
});
export const topSideOptionsStore = atom({
  key: "topSideOptionsStore",
  default: [],
});
export const bottomSideOptionsStore = atom({
  key: "bottomSideOptionsStore",
  default: [],
});
export const Section3DataStore = atom({
  key: "Section3DataStore",
  default: {},
});
export const Section4DataStore = atom({
  key: "Section4DataStore",
  default: {},
});

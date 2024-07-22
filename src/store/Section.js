import { atom } from "recoil";

export const activeSection = atom({
  key: "activeSection",
  default: 0,
});

export const testDataSection1 = atom({
  key: "testDataSection1",
  default: null,
});

export const testId = atom({
  key: "testId",
  default: null,
});

export const savedSection = atom({
  key: "savedSection",
  default: 0,
});

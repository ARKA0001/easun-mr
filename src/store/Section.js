import { atom } from "recoil";

export const activeSection = atom({
  key: "activeSection",
  default: "testSection1", 
});


export const testDataSection1 = atom({
  key: "testDataSection1",
  default: null, 
});

import { atom } from "recoil";

export const potentialFreeCheckStore = atom({
  key: "potentialFreeCheckStore",
  default: {
    checkboxes: {},
  },
});

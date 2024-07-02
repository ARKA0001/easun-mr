import { atom } from "recoil";

export const activeSection = atom({
  key: "activeSection",
  default: 1, // Initial user logged in state
});

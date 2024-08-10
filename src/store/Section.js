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

// Modals

export const errorModalStore = atom({
  key: "errorModalStore",
  default: false,
});
export const infoModalStore = atom({
  key: "infoModalStore",
  default: false,
});
export const actionModalStore = atom({
  key: "actionModalStore",
  default: false,
});
export const startModalStore = atom({
  key: "startModalStore",
  default: false,
});

export const errorMessageStore = atom({
  key: "errorMessageStore",
  default: [],
});
export const infoMessageStore = atom({
  key: "infoMessageStore",
  default: "",
});
export const actionMessageStore = atom({
  key: "actionMessageStore",
  default: "",
});
export const startMessageStore = atom({
  key: "startMessageStore",
  default: "",
});

// Default Data Display

export const tapPositionStore = atom({
  key: "tapPositionStore",
  default: [],
});
export const directionStore = atom({
  key: "directionStore",
  default: 0,
});
export const cycleStore = atom({
  key: "cycleStore",
  default: 0,
});
export const operationStore = atom({
  key: "operationStore",
  default: 0,
});
export const serialNoStore = atom({
  key: "serialNoStore",
  default: 0,
});
export const oVariantStore = atom({
  key: "oVariantStore",
  default: 0,
});
export const testVoltageStore = atom({
  key: "testVoltageStore",
  default: "under",
});
export const maSignal1Store = atom({
  key: "maSignal1Store",
  default: 0,
});
export const maSignal2Store = atom({
  key: "maSignal2Store",
  default: 0,
});
export const motorCurrentStore = atom({
  key: "motorCurrentStore",
  default: 0,
});
export const powerInfoStore = atom({
  key: "powerInfoStore",
  default: [],
});



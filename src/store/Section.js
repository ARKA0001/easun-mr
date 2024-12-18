import { atom } from "recoil";

export const activeSection = atom({
  key: "activeSection",
  default: 0,
});

export const testDataSection1 = atom({
  key: "testDataSection1",
  default: null,
});

export const testIdStore = atom({
  key: "testIdStore",
  default: null,
});

export const savedSection = atom({
  key: "savedSection",
  default: 0,
});

export const responseMessageStore = atom({
  key: "responseMessageStore",
  default: "",
});
export const mainMessageStore = atom({
  key: "mainMessageStore",
  default: "",
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

export const trueCheckStore = atom({
  key: "trueCheckStore",
  default: [],
});
export const falseCheckStore = atom({
  key: "falseCheckStore",
  default: [],
});
export const disableDropdownStore = atom({
  key: "disableDropdownStore",
  default: false,
});
export const lowerValuesStore = atom({
  key: "lowerValuesStore",
  default: [],
});
export const upperValuesStore = atom({
  key: "upperValuesStore",
  default: [],
});



// Default Data Display

export const tapPositionStore = atom({
  key: "tapPositionStore",
  default: "",
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
export const tapPositionByCurrentStore = atom({
  key: "tapPositionByCurrent",
  default: 0,
});
export const tapPositionByCurrentStore2 = atom({
  key: "tapPositionByCurrent2",
  default: 0,
});
export const powerInfoStore = atom({
  key: "powerInfoStore",
  default: [],
});
export const extraLabelStore = atom({
  key: "extraLabelStore",
  default: "",
});

// Socket Data
export const socketStore = atom({
  key: "socketStore",
  default: null,
});


export const manualButtonStateStore = atom({
  key: "manualButtonStateStore",
  default: false,
});


export const startActiveStore = atom({
  key: "startActiveStore",
  default: true,
});

export const camPicCountStore = atom({
  key: "camPicCountStore",
  default: 1,
});


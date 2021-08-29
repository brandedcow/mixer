import { none, useState } from "@hookstate/core";
import globalState from "./global";

const wrapState = (s) => ({
  get: () => s.currentTrayIdx.value,
  set: (idx) => s.currentTrayIdx.set(idx),
  reset: () => s.currentTrayIdx.set(-1),
  addColor: (newColor) => {
    const currentTray = s.trays[s.currentTrayIdx.value];
    // no tray selected
    if (s.currentTrayIdx.value === -1) return;

    // add to weight if already exists
    const foundIndex = currentTray
      .get()
      .findIndex((color) => color.name === newColor.name);
    if (foundIndex !== -1) {
      currentTray[foundIndex].set((c) => ({
        ...c,
        hex: c.hex,
        weight: c.weight + 1,
      }));
    } else {
      currentTray.merge([newColor]);
    }
  },
  removeColor: (idx) => s.trays[s.currentTrayIdx.value][idx].set(none),
});

const useCurrentTray = () => wrapState(useState(globalState));

export default useCurrentTray;

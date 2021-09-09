import { none, useState } from "@hookstate/core";
import globalState from "./global";

const wrapState = (s) => ({
  get: () => s.currentTrayIdx.value,
  set: (idx) => s.currentTrayIdx.set(idx),
  setLast: () => s.currentTrayIdx.set(s.trays.value.length - 1),
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
  incIdx: (idx) => {
    console.log("inc");
    const currentTray = s.trays[s.currentTrayIdx.value];
    currentTray[idx].set((c) => ({
      ...c,
      weight: c.weight + 1,
    }));
  },
  decIdx: (idx) => {
    const currentTray = s.trays[s.currentTrayIdx.value];
    console.log(currentTray[idx].value);
    if (currentTray[idx].value.weight - 1 === 0) {
      // currentTray[idx].set(none);
      return;
    } else {
      currentTray[idx].set((c) => ({
        ...c,
        weight: c.weight - 1,
      }));
    }
  },
});

const useCurrentTray = () => wrapState(useState(globalState));

export default useCurrentTray;

import { useState } from "@hookstate/core";

import globalState from "./global";

const wrapState = (s) => ({
  getList: () => s.palettes.value,
  getPalette: (idx) => s.palettes.value[idx],
  getCurrent: () => s.currentPalette.value,
  getCurrentPalette: () => s.palettes.value[s.currentPalette.value],
  add: (palette) => s.palettes.merge([palette]),
  select: (idx) => s.currentPalette.set(idx),
});

const usePaletteState = () => wrapState(useState(globalState));

export default usePaletteState;

import { useState } from "@hookstate/core";

import globalState from "./global";

const wrapState = (s) => ({
  getList: () => s.palettes.value,
  getCurrent: () => s.currentPalette.value,
  getCurrentPalette: () => s.palettes.value[s.currentPalette.value],
  add: (palette) => s.palettes.merge([palette]),
  select: (idx) => s.currentPalette.set(idx),
});

const usePaletteState = () => wrapState(useState(globalState));

export default usePaletteState;

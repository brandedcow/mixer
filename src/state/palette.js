import { useState } from "@hookstate/core";

import globalState from "./global";

const wrapState = (s) => ({
  get: () => s.currentPalette.value
})

export const usePaletteState = () => wrapState(useState(globalState))

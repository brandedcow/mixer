import { useState } from "@hookstate/core";

import globalState from "./global";

const wrapState = (s) => ({
  getList: () => s.palettes.value,
  add: (palette) => s.palettes.merge([palette]),
});

const usePaletteState = () => wrapState(useState(globalState));

export default usePaletteState;

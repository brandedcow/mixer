import { none, useState } from "@hookstate/core";

import globalState from "./global";

const wrapState = (s) => ({
  get: () => s.trays.value,
  add: () => s.trays.merge([[]]),
  remove: (idx) => s.trays[idx].set(none),
});

const useTrayList = () => wrapState(useState(globalState));

export default useTrayList;

import { useState } from "@hookstate/core";

import globalState from "./global";

const wrapState = (s) => ({
  get: () => s.currentPage.value,
  set: (idx) => s.currentPage.set(idx),
});

const useCurrentPage = () => wrapState(useState(globalState));

export default useCurrentPage;

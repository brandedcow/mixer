import { useState } from "@hookstate/core";
import globalState from "./global";
import { camelToTitle } from "../lib/toTitleCase";

const wrapState = (s) => ({
  get: (key) => s.colors.value[key],
  getEntries: () => Object.entries(s.colors.value),
  getOptions: () =>
    Object.keys(s.colors.value).map((label) => ({
      label: camelToTitle(label),
      value: label,
    })),
  setCurrent: (idx) => s.currentSet.set(idx),
  find: (query) => {
    let searchTarget = Object.values(s.colors.value)[0];

    if (query === "") return searchTarget;

    if (s.currentSet.value !== "") {
      searchTarget = s.colors.value[s.currentSet.value];
    }

    return searchTarget.filter((color) =>
      color.name.toLowerCase().includes(query.toLowerCase())
    );
  },
});

export const useColorSets = () => wrapState(useState(globalState));

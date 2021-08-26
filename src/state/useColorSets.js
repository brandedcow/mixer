import { useState } from "@hookstate/core";
import globalState from "./global";
import { camelToTitle } from "../lib/toTitleCase";

const wrapState = (s) => ({
  get: (idx) => s.colors.value[idx],
  getEntries: () => Object.entries(s.colors.value),
  getOptions: () =>
    Object.keys(s.colors.value).map((label, value) => ({
      label: camelToTitle(label),
      value: label,
    })),
});

export const useColorSets = () => wrapState(useState(globalState));

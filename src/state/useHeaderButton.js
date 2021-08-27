import { useState } from "@hookstate/core";
import globalState from "./global";

const wrapState = (s) => ({
  get: () => s.header.value,
  showButton: () => s.header.isButtonVisible.set(true),
  hideButton: () => s.header.isButtonVisible.set(false),
  setButtonLabel: (str) => s.header.buttonLabel.set(str),
  setButtonFunction: (func) => s.header.buttonFunction.set(func),
  reset: () => {
    s.header.isButtonVisible.set(false);
    s.header.buttonLabel.set("");
    s.header.buttonFunction.set(() => {});
  },
});

const useHeaderButton = () => wrapState(useState(globalState));

export default useHeaderButton;

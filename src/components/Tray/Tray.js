import React from "react";
import mixColors from "../../lib/mixColors";
import MinimizedTray from "./MinimizedTray";
import useCurrentTrayState from "../../state/useCurrentTray";

export default function Tray({
  idx,
  colors,
  onExpand,
  onDelete,
  minSize,
  maxSize,

  onClick,
  style,
}) {
  const currentTrayState = useCurrentTrayState();
  const color = mixColors(...colors)?.hex || "FFFFFF";

  const renderedComponent = MinimizedTray;

  const isSelected = currentTrayState.get() === idx;

  return (
    <>
      {React.createElement(renderedComponent, {
        hex: color,
        colors,
        minSize,
        maxSize,
        isSelected,
        onExpand,
        onDelete,

        onClick,
        style,
      })}
    </>
  );
}

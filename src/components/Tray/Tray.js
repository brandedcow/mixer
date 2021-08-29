import React from "react";
import mixColors from "../../lib/mixColors";
import MinimizedTray from "./MinimizedTray";
import useCurrentTrayState from "../../state/useCurrentTray";

export default function Tray({
  idx,
  colors,
  onSelect,
  onDelete,
  minSize,
  maxSize,

  onClick,
  style,
}) {
  const currentTrayState = useCurrentTrayState();
  const color = mixColors(...colors)?.hex || "FFFFFF";

  function handleExpandClick() {
    onSelect();
  }

  // const renderedComponent = isExpanded ? MaximizedTray : MinimizedTray
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
        onExpand: handleExpandClick,
        onDelete,

        onClick,
        style,
      })}
    </>
  );
}

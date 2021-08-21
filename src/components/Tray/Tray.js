import React from 'react'
import mixColors from '../../lib/mixColors'
import MinimizedTray from './MinimizedTray'
import MaximizedTray from './MaximizedTray'
import { useCurrentTrayState } from '../../state/currentTray'

export default function Tray({
  size, 
  idx,
  colors,
  onSelect,
  onDelete,
  minSize,
  maxSize,
}) {
  const currentTrayState = useCurrentTrayState()
  const color = mixColors(...colors)?.hex || 'FFFFFF'

  function handleExpandClick() {
    onSelect()
  }

  function handleSelect() {
    currentTrayState.set(idx)
  }

  // const renderedComponent = isExpanded ? MaximizedTray : MinimizedTray
  const renderedComponent = MinimizedTray

  const isSelected = currentTrayState.get() === idx

  return (
    <>
      {React.createElement(renderedComponent, {
        hex: color,
        colors,
        idx,
        minSize,
        maxSize,
        isSelected,
        onSelect: handleSelect,
        onExpand: handleExpandClick,
        onDelete,
      })}
    </>
  )
}
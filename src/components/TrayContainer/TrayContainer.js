import { useState } from '@hookstate/core'
import Tray from '../Tray/Tray'
import './TrayContainer.css'

export default function TrayContainer({ 
  colors, 
  onWeightChange,
   onDeleteColor 
}) {

  return (
    <div className="tray-container">
      <Tray 
        colors={colors}
        onWeightChange={onWeightChange}
        onDeleteColor={onDeleteColor}
      />
    </div>
  )
}
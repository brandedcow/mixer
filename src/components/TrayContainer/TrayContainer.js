import { useState } from '@hookstate/core'
import Tray from '../Tray/Tray'
import './TrayContainer.css'

export default function TrayContainer({ colors }) {
  

  return (
    <div className="tray-container">
      <Tray 
        colors={colors}
      />
    </div>
  )
}
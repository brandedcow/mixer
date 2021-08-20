import Tray from '../Tray/Tray'
import AddTrayButton from './AddTrayButton'
import './TrayContainer.css'
import { useTrayState } from '../../state/global'
import { useState } from '@hookstate/core'
import classNames from 'classnames'

export default function TrayContainer() {
  const selectedTray = useState(-1)
  const trayState = useTrayState()

  function handleAddTray() { trayState.add([]) }
  function handleSelectTray(idx) { selectedTray.set(idx) }
  function handleCloseTray() { selectedTray.set(-1) }

  const overlayClassName = classNames(
    'tray-container__overlay',
    { 'tray-container__overlay--active': selectedTray.get() !== -1 }
  )

  return (
    <div className="tray-container">
      <AddTrayButton
        size={300}
        onClick={handleAddTray}
      />
      {trayState.get().map((tray, idx) => (
        <Tray
          style={{
            zIndex: selectedTray === idx ? 10 : 'initial'
          }}
          key={`tray-${idx}`}
          size={300}
          colors={tray}
          onSelect={handleSelectTray}
        />
      ))}
      <div 
        className={overlayClassName} 
        onClick={handleCloseTray}
      />
    </div>
  )
}
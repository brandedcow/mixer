import Tray from '../Tray/Tray'
import AddTrayButton from './AddTrayButton'
import './TrayList.css'
import { useCurrentTrayState } from '../../state/currentTray'
import { useTrayListState } from '../../state/trayList'

export default function TrayList() {
  const currentTrayState = useCurrentTrayState()
  const trayListState = useTrayListState()

  function handleAddTray() { trayListState.add([]) }
  function handleDeleteTray(idx) { trayListState.remove(idx) }

  return (
    <div className="tray-container">
      <AddTrayButton
        size={300}
        onClick={handleAddTray}
      />
      {trayListState.get().map((tray, idx) => (
        <Tray
          style={{
            zIndex: currentTrayState.get() === idx ? 10 : 'initial'
          }}
          key={`tray-${idx}`}
          minSize={300}
          maxSize={650}
          colors={tray}
          idx={idx}
          onDelete={() => handleDeleteTray(idx)}
        />
      ))}
    </div>
  )
}
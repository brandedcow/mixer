import Tray from '../Tray/Tray'
import AddTrayButton from './AddTrayButton'
import './TrayList.css'
import { useCurrentTrayState } from '../../state/currentTray'
import { useTrayListState } from '../../state/trayList'
import useWindowSize from '../../lib/useWindowSize'

export default function TrayList() {
  const currentTrayState = useCurrentTrayState()
  const trayListState = useTrayListState()

  function handleAddTray() { trayListState.add([]) }
  function handleDeleteTray(idx) { trayListState.remove(idx) }
  
  const numCol = Math.floor((useWindowSize().width - 280) / 350)
  const gridTemplateColumns = new Array(numCol).fill('auto').join(' ')

  return (
    <div className="tray-container"
      style={{ gridTemplateColumns }}
    >
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
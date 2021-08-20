import { useState } from '@hookstate/core'
import isDarkColor from '../../lib/isDarkColor'
import mixColors from '../../lib/mixColors'
import './Tray.css'
import TraySample from './TraySample'

export default function Tray({
  style,
  size, 
  colors,
  onSelect,
}) {
  const isExpanded = useState(false)
  const color = mixColors(...colors)?.hex || 'FFFFFF'

  const isMixture = colors.length >= 2

  function handleExpandClick() {
    onSelect()
    isExpanded.set(!isExpanded.get())
  }

  return (
    <div 
      className="tray"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...style
      }}
      onClick={handleExpandClick}  
    >
      <div 
        className={`tray__color ${isMixture ? '': 'tray__color--rounded-bottom'}`}
        style={{ 
          background: `#${color}` || "white",
          color: isDarkColor(color) ? 'white' : 'black'
        }}
      >
        {`#${color}`}
      </div>
      {isMixture && (
        <div className="tray__samples">
          {colors.map(({ name: colorName, hex, weight}, idx) => (
            <TraySample
              key={`tray-color-${idx}`}
              name={colorName}
              hex={hex}
              idx={idx}
              weight={weight}
              style={{ flex: weight }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
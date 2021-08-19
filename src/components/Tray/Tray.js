import isDarkColor from '../../lib/isDarkColor'
import { mixColors } from '../../lib/mixColors'
import './Tray.css'
import TraySample from './TraySample'

export default function Tray({ colors, onWeightChange, onDeleteColor }) {
  const color = mixColors(...colors)?.hex || 'white'

  const isMixture = colors.length >= 2

  return (
    <div className="tray">
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
              onWeightChange={onWeightChange}
              onDelete={onDeleteColor}
            />
          ))}
        </div>
      )}
    </div>
  )
}
import { mixColors } from '../../lib/mixColors'
import './Tray.css'
import TraySample from './TraySample'

export default function Tray({ colors }) {
  const color = mixColors(...colors)?.hex || 'white'

  return (
    <div className="tray">
      <div 
        className="tray__color"
        style={{ background: `#${color}` || "white" }}
      />
      {colors.length >=2 && (
        <div className="tray__samples">
          {colors.map(({ name: colorName, hex, weight}, idx) => (
            <TraySample
              key={`tray-color-${idx}`}
              name={colorName}
              hex={hex}
              style={{ flex: weight }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
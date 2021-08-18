import { mixColors } from '../../lib/mixColors'
import './Tray.css'

export default function Tray({ colors }) {
  const color = mixColors(...colors.map(color => color.hex))
  const panColors = colors.map(color => color.hex)

  return (
    <div className="tray" style={{

    }}>
      <div 
        className="tray__color"
        style={{ background: `#${color}` || "white" }}
      >
      </div>
      {colors.length >=2 && (
        <div className="tray__samples">
          {panColors.map((color, idx) => (
            <div
              key={`tray-color-${idx}`}
              className="tray_sample"
              style={{
                background: `#${color}`,
                flex: 1,
              }}
            >
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
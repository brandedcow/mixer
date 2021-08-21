import TraySample from './TraySample'
import './MaximizedTray.css'

export default function MaximizedTray({
  hex,
  colors,
  idx: trayIdx,
  onDelete,
  maxSize: size,
}) {
  return (
    <div 
      className="max-tray"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <div className="max-tray__frame">
        <div className="max-tray__controls">

        </div>
        <div className="max-tray__content">

        </div>
        <div className="max-tray__samples">
          {colors.map(({name, hex: sampleHex, weight }, idx)=> (
            <TraySample
              key={`tray-${trayIdx}-color-${idx}`}
              name={name}
              hex={sampleHex}
              idx={idx}
              weight={weight}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
import { Resizable } from 'react-resizable'
import './TraySample.css'

export default function TraySample({ hex, style }) {
  return (
    <Resizable
      className="tray__sample"
    >
      <div
        style={{
          ...style,
          background: `#${hex}`
        }}
      >
      </div>
    </Resizable>
  
  )
}
import PalettePan from '../PalettePan/PalettePan'
import './Palette.css'

export default function Palette({ pans, onPanClick }) {

  return (
    <div className="palette">
      {pans.map(({ hex, name }, idx) => (
        <PalettePan
          key={`palette-pan-${idx}`}
          name={name}
          hex={hex}
          onClick={onPanClick}
        />
      ))
      }
    </div>
  )
}
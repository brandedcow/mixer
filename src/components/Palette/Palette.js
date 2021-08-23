import PalettePan from './PalettePan'
import './Palette.css'
import palettes from '../../enum/palettes'
import { usePaletteState } from '../../state/palette'

export default function Palette() {
  const paletteState = usePaletteState()

  return (
    <div className="palette">
      <div className="palette__frame">
        {palettes[paletteState.get()].map(({ hex, name }, idx) => (
          <PalettePan
            key={`palette-pan-${idx}`}
            name={name}
            hex={hex}
          />
        ))}
      </div>
    
    </div>
  )
}
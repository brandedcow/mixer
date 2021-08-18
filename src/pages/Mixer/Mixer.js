import { useState } from '@hookstate/core'
import Palette from '../../components/Palette/Palette'
import TrayContainer from '../../components/TrayContainer/TrayContainer'
import palettes from '../../lib/palettes'
import globalState from '../../state/global'
import './Mixer.css'

export default function Mixer() {
  const state = useState(globalState)
  const colors = useState([])

  function handlePanClick(e) {
    const panName = e.target.getAttribute('name')
    const panHex = e.target.getAttribute('hex')

    // deal with adding of color that exists already
    const foundIndex = colors.get().findIndex((color) => color.name === panName)

    if (foundIndex !== -1) {
      adjustWeight(foundIndex, colors.get()[foundIndex].weight + 1)
    } else {
      colors.merge([{ 
        name: panName, 
        hex: panHex, 
        weight: 1 
      }])
    }
  }

  function adjustWeight(idx, weight) {
    colors[idx].set(p => ({
      name: p.name,
      hex: p.hex,
      weight
    }))
  }

  return (
    <div className="mixer">
      <TrayContainer 
        colors={colors.get()}
      />
      <Palette 
        pans={palettes[state.currentPalette.get()]}
        onPanClick={handlePanClick}
      />
    </div>
  ) 
}


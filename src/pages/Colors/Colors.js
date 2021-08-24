import { useColorSets } from '../../state/useColorSets'
import {toTitleCase, camelToTitle } from '../../lib/toTitleCase'
import './Colors.css'

export default function Colors() {
  const colorSets = useColorSets()

  return (
    <div>
      {colorSets.getEntries().map(([name, set], idx) => {
        return (
          <div
            key={`color-set-${idx}`}
          >
            {camelToTitle(name)}
          </div>
        )
      })}
    </div>
  )
}
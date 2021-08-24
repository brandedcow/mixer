import { useColorSets } from "../../state/useColorSets"
import { camelToTitle } from "../../lib/toTitleCase"
import './SetList.css'
import SetCard from "./SetCard"

export default function SetList() {
  const colorSets = useColorSets()
  return (
    <div className="set-list">
      {colorSets.getEntries().map(([name, set], idx) => {
        return (
          <SetCard
            key={`set-${idx}`}
            name={camelToTitle(name)}
            colors={set}
          />
        )
      })}
    </div>
  )
}
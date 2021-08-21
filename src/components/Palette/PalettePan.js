import { useState } from "@hookstate/core"
import classNames from "classnames"
import "./PalettePan.css"

export default function PalettePan({ name, hex, ...props }) {
  const isHovered = useState(false)
  const isActive = useState(false)

  const panClassNames = classNames(
    'palette__pan',
    { 'palette__pan--hover': isHovered.get() },
    { 'palette__pan--active': isActive.get() }
  )

  return (
    <div 
      className={panClassNames}
      style={{ background: `#${hex}`}}
      onMouseEnter={() => isHovered.set(true)}
      onMouseLeave={() => {
        isHovered.set(false)
        isActive.set(false)
      }}
      onMouseDown={() => isActive.set(true)}
      onMouseUp={() => isActive.set(false)}
      name={name}
      hex={hex}
      {...props}  
    >
    </div>
  )
}
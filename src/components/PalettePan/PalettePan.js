import "./PalettePan.css"

export default function PalettePan({ name, hex, ...props }) {
  return (
    <div 
      className="palette__pan"
      style={{ background: `#${hex}`}}
      name={name}
      hex={hex}
      {...props}  
    >
    </div>
  )
}
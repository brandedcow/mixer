import './ColorSquare.css'

export default function ColorSquare({
  color
}) {

  console.log(color)
  return (
    <div
      style={{
        background: color,
      }}
    >
    </div>
  )
}
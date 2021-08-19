import './TraySample.css'

export default function TraySample({ 
  hex, 
  style, 
  weight, 
  idx, 
  onWeightChange,
  onDelete
}) {

  function handleScrollCapture(e) {
    if (e.deltaY > 0) {
      if (weight - 1 > 0) {
        onWeightChange(idx, weight - 1)
      }
    } else {
      onWeightChange(idx, weight + 1)
    }
  }

  function handleDelete(e) {
    onDelete(idx)
  }

  return (
    <div
      className="tray-sample"
      style={{
        ...style,
        background: `#${hex}`
      }}
    >
      <div 
        className="tray-sample__weight"
        onWheel={handleScrollCapture}
      >
        <div
          className="tray-sample__delete-button"
          onClick={handleDelete}
        >
          X
        </div>
        {weight}
      </div>
    </div>  
  )
}
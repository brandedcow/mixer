import "./Slider.css";

export default function Slider({
  min,
  max,
  step,
  value,
  onChange,
  onDrop,
  style,
}) {
  function handleChange(e) {
    onChange(+e.target.value);
  }

  return (
    <div className="slider" style={{ ...style }}>
      <input
        className="slider__input"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        onMouseUp={onDrop}
      />
      <div className="slider__value">{value}</div>
    </div>
  );
}

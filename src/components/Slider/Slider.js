import "./Slider.css";

export default function Slider({
  min,
  max,
  step,
  value,
  onChange,
  onDrop,
  label,
}) {
  function handleChange(e) {
    onChange(+e.target.value);
  }

  return (
    <div className="slider">
      <label className="slider__label">{label}</label>
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

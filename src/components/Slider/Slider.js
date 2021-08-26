import "./Slider.css";

export default function Slider({ min, max, step, value, onChange }) {
  return (
    <div className="slider">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
      <div className="slider__value">{value}</div>
    </div>
  );
}

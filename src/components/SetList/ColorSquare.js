import "./ColorSquare.css";

export default function ColorSquare({ color }) {
  return (
    <div
      style={{
        background: color,
      }}
    ></div>
  );
}

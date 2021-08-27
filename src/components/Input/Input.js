import { useRef } from "react";
import { ReactComponent as EditIcon } from "../../assets/icons/noun_edit_1954019.svg";
import "./Input.css";

export default function Input({ value, onChange, placeholder, size, style }) {
  const inputEl = useRef(null);

  function handleEditClick() {
    inputEl.current.focus();
  }

  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="input__container" style={{ ...style }}>
      <EditIcon
        height={size || "3rem"}
        width={size || "3rem"}
        onClick={handleEditClick}
      />

      <input
        style={{
          fontSize: size || "3rem",
        }}
        ref={inputEl}
        className="input__field"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

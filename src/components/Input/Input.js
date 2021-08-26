import { useRef } from "react";
import { ReactComponent as EditIcon } from "../../assets/icons/noun_edit_1954019.svg";
import "./Input.css";

export default function Input({ value, onChange, placeholder }) {
  const inputEl = useRef(null);

  function handleEditClick() {
    inputEl.current.focus();
  }

  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className="input__container">
      <EditIcon height="3rem" width="3rem" onClick={handleEditClick} />

      <input
        ref={inputEl}
        className="input__field"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

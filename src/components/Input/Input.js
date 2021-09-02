import { useEffect, useMemo, useRef } from "react";
import { ReactComponent as EditIcon } from "../../assets/icons/noun_edit_1954019.svg";
import "./Input.css";
import debounce from "../../lib/debounce";

export default function Input({
  icon,
  value,
  onChange,
  placeholder,
  size,
  style,
  onInputEnd,
}) {
  const inputEl = useRef(null);

  function handleEditClick() {
    inputEl.current.focus();
  }

  function handleChange(e) {
    if (onChange) {
      onChange(e.target.value);
    }
  }

  const handleKeyUp = (e) => {
    onInputEnd();
  };

  const debouncedHandleKeyUp = useMemo(() => debounce(handleKeyUp, 500), []);

  return (
    <div className="input__container" style={{ ...style }}>
      {icon && (
        <EditIcon
          height={size || "3rem"}
          width={size || "3rem"}
          onClick={handleEditClick}
        />
      )}

      <input
        style={{
          fontSize: size || "3rem",
        }}
        ref={inputEl}
        className="input__field"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyUp={debouncedHandleKeyUp}
      />
    </div>
  );
}

import Select from "react-select";

import "./Dropdown.css";

export default function Dropdown({ onChange, options }) {
  return (
    <div>
      <Select onChange={onChange} options={options} />
    </div>
  );
}

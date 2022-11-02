import React, { useState } from "react";

export default function Dropdown() {
  const getInitialState = () => {
    const value = "Java";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <select value={value} onChange={handleChange}>
        <option value="Java">Java</option>
        <option value="React">React</option>
        <option value="SQL">SQL</option>
      </select>
      <p>{`You selected ${value}`}</p>
    </div>
  );
}

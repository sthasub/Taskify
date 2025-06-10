import React from "react";

function Input({ handleOnChange, name, value }) {
  return (
    <input
      name={name}
      value={value}
      onChange={handleOnChange}
      className="p-1 border hover:border-red-600"
    />
  );
}

export default Input;

import React from "react";

function Button({ children, colourType, handleOnclick }) {
  return (
    <>
      <button
        className={`p-1 rounded ${
          colourType === 'danger'
            ? "text-red-600 border-red-600 hover:cursor-pointer hover:bg-red-600"
            : "text-white bg-blue-500 hover:cursor-pointer hover:bg-green-500"
        }`}

        onClick={handleOnclick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;

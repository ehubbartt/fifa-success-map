import React from "react";

const Selector = ({ text, handleClick, isSelected, index }) => {
  return (
    <span
      className={isSelected ? "selector selected" : "selector"}
      onClick={() => handleClick(index)}
    >
      {text}
    </span>
  );
};

export default Selector;

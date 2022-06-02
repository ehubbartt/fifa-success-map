import React, { useState } from "react";
import Selector from "./Selector";
import "../styles/selectors.css";

const SelectorContainer = ({ title, selectors, onChange }) => {
  const [curSelected, setCurSelected] = useState(0);

  const handleClick = (index) => {
    setCurSelected(index);
    onChange(selectors[index]);
  };

  return (
    <div className="selector-container">
      <h3>{title}</h3>
      <div
        className="selectors"
        style={{ gridTemplateColumns: `repeat(${selectors.length}, 1fr)` }}
      >
        {selectors.map((selector, index) => {
          return (
            <Selector
              key={index}
              text={selector.name}
              handleClick={handleClick}
              index={index}
              isSelected={curSelected === index}
            ></Selector>
          );
        })}
      </div>
    </div>
  );
};

export default SelectorContainer;

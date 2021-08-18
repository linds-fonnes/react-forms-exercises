import React from "react";
import "./Box.css";

function Box({ box, removeBox }) {
  const boxStyles = {
    backgroundColor: box.bgColor,
    width: `${box.width}px`,
    height: `${box.height}px`,
  };
  return (
    <div className="Box-container">
      <div style={boxStyles}></div>
      <button className="Box-button" onClick={() => removeBox(box.id)}>
        x
      </button>
    </div>
  );
}

export default Box;

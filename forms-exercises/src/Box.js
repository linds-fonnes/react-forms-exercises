import React from "react";

function Box({ box, removeBox }) {
  const boxStyles = {
    backgroundColor: box.bgColor,
    width: `${box.width}px`,
    height: `${box.height}px`,
  };
  return (
    <div>
      <div style={boxStyles}></div>
      <button onClick={() => removeBox(box.id)}>x</button>
    </div>
  );
}

export default Box;

import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const renderBoxes = () => {
    return boxes.map((box) => (
      <Box key={box.id} box={box} removeBox={removeBox} />
    ));
  };

  const addBox = (box) => {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  };

  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  );
}
export default BoxList;

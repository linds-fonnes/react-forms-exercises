import React from "react";

const Todo = ({ item, removeItem }) => {
  return (
    <li id={item.id}>
      {item.name} <button onClick={() => removeItem(item.id)}>x</button>
    </li>
  );
};

export default Todo;

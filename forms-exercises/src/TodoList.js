import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

function TodoList() {
  const [items, setItems] = useState([]);

  const renderItems = () => {
    return (
      <ul>
        {items.map((item) => (
          <Todo item={item} removeItem={removeItem} />
        ))}
      </ul>
    );
  };

  const removeItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const addItem = (item) => {
    let newItem = { ...item, id: uuid() };
    setItems((item) => [...items, newItem]);
  };

  return (
    <div className="TodoList">
      <NewTodoForm addItem={addItem} />
      {renderItems()}
    </div>
  );
}

export default TodoList;

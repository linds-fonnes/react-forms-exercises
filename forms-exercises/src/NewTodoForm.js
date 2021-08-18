import React, { useState } from "react";

function NewTodoForm({ addItem }) {
  const INITIAL_STATE = { name: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addItem(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Todo:</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <button>Add todo</button>
    </form>
  );
}

export default NewTodoForm;

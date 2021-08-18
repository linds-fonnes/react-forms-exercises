import React, { useState } from "react";
import "./NewBoxForm.css";

const NewBoxForm = ({ addBox }) => {
  const INITIAL_STATE = { bgColor: "", width: "", height: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <form className="NewBoxForm-form" onSubmit={handleSubmit}>
      <label htmlFor="bgColor">Color: </label>
      <input
        className="NewBoxForm-input"
        id="bgColor"
        name="bgColor"
        value={formData.bgColor}
        onChange={handleChange}
      />

      <label htmlFor="width">Width: </label>
      <input
        className="NewBoxForm-input"
        type="number"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height: </label>
      <input
        className="NewBoxForm-input"
        type="number"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <button className="NewBoxForm-button">Add new box!</button>
    </form>
  );
};

export default NewBoxForm;

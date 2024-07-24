import React from "react";

function AddForm({ handleSubmit, handleInputChange, newTask }) {
  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="new-item">Add to to do list</label>
        <input
          type="text"
          id="new-item"
          onChange={handleInputChange}
          value={newTask}
        />
        <button type="submit">Add item</button>
      </form>
    </>
  );
}

export default AddForm;

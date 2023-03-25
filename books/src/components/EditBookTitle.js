import { useState } from "react";

function EditBookTitle({ onEdit, book, onSave, isEdit }) {
  const [newTitle, setNewTitle] = useState("");

  function handleChange(e) {
    setNewTitle(e.target.value);
  }

  function handleClick() {
    onEdit(newTitle, book.id);
    onSave(false);
  }

  return (
    <div>
      <input value={newTitle} type="text" onChange={handleChange} />
      <button onClick={handleClick}>save</button>
    </div>
  );
}

export default EditBookTitle;

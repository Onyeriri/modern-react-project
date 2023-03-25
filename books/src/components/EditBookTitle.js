import { useState } from "react";

function EditBookTitle({ onEdit, book }) {
  const [newTitle, setNewTitle] = useState(book.title);

  function handleChange(e) {
    setNewTitle(e.target.value);
  }

  function handleClick() {
    onEdit(newTitle);
  }

  return (
    <div>
      <input value={newTitle} type="text" onChange={handleChange} />
      <button onClick={handleClick}>save</button>
    </div>
  );
}

export default EditBookTitle;

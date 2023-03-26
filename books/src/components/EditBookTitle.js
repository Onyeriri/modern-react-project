import { useState } from "react";
import { useContext } from "react";
import BooksContext from "../context/Books";

function EditBookTitle({ onEdit, book }) {
  const [newTitle, setNewTitle] = useState(book.title);

  const { count, incrementCount } = useContext(BooksContext);

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
      <br />
      Count: {count}
      <button onClick={incrementCount}>Add count</button>
    </div>
  );
}

export default EditBookTitle;

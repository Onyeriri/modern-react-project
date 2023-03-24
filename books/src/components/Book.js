import { useState } from "react";

function Book({ book, onSaveBooks, books, onEdit }) {
  const [isEdit, setIsEdit] = useState(true);
  const [newTitle, setNewTitle] = useState("");

  function handleChange(e) {
    setNewTitle(e.target.value);
  }

  onEdit(newTitle, book.id);
  // function handleEdit() {
  //   const editedTitle = { ...book, title: newTitle };
  //   console.log(editedTitle);

  //   onSaveBooks([...books, editedTitle]);
  // }

  // function handleClick() {
  //   // setNewTitle(newTitle);
  // }

  return (
    <div>
      <div>
        <span>edit</span>
        <span>delete</span>
        <br />
        <img src="" alt="Book" />
        <h2>{book.title}</h2>
        <br />

        {isEdit && (
          <div>
            <input value={newTitle} type="text" onChange={handleChange} />
            <button onClick={(newTitle, id) => onEdit(newTitle, id)}>
              save
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Book;

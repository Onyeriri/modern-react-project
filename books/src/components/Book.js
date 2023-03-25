import { useState } from "react";

function Book({ book, onDelete, onEdit }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  function handleChange(e) {
    setNewTitle(e.target.value);
  }

  function handleEdit() {
    setIsEdit(!isEdit);
  }

  function handleDeleteBook() {
    onDelete(book);
  }

  function handleClick() {
    onEdit(newTitle, book.id);
    setIsEdit(!isEdit);
  }

  // console.log(newTitle);
  // console.log(book.id);

  // onEdit(newTitle, book.id);
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
        <span onClick={handleEdit}>edit</span>
        <span onClick={handleDeleteBook}>delete</span>
        <br />
        <img src="" alt="Book" />
        <h2>{book.title}</h2>
        <br />

        {isEdit && (
          <div>
            <input value={newTitle} type="text" onChange={handleChange} />
            <button onClick={handleClick}>save</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Book;

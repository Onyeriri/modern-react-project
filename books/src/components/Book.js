import EditBookTitle from "./EditBookTitle";
import { useState } from "react";

function Book({ book, onDelete, onEdit }) {
  const [isEdit, setIsEdit] = useState(false);

  function handleDeleteBook() {
    onDelete(book);
  }

  function handleEdit() {
    setIsEdit(true);
  }

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
          <EditBookTitle
            onEdit={onEdit}
            book={book}
            onSave={setIsEdit}
            isEdit={isEdit}
          />
        )}
      </div>
    </div>
  );
}

export default Book;

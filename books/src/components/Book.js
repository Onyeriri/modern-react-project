import EditBookTitle from "./EditBookTitle";
import { useState } from "react";
import useBookContext from "../hooks/use-book-context";

function Book({ book }) {
  const [isEdit, setIsEdit] = useState(false);
  const { deleteBookById, editBookById } = useBookContext();

  function handleDeleteBook() {
    deleteBookById(book);
  }

  function handleEdit() {
    setIsEdit(!isEdit);
  }

  function handleSubmit(title) {
    editBookById(title, book.id);
    setIsEdit(!isEdit);
  }

  let url = `https://picsum.photos/seed/${book.id}/200/300`;

  return (
    <div>
      <div>
        <span onClick={handleEdit}>edit</span>
        <span onClick={handleDeleteBook}>delete</span>
        <br />
        <img src={url} alt="Books" />
        <h2>{book.title}</h2>
        <br />

        {isEdit && (
          <EditBookTitle
            onEdit={handleSubmit}
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

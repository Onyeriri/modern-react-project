import { useState } from "react";
import AddBooks from "./components/AddBooks";
import BookList from "./components/BookLists";

function App() {
  const [isBookEmpty, setBookEmpty] = useState(true);
  const [books, setBooks] = useState([]);

  const createBook = (title, id) => {
    if (!title) {
      return;
    }

    const newBook = [...books, { title, id }];

    setBooks(newBook);

    if (newBook.length !== 0) setBookEmpty(false);
  };

  function handleEdit(newTitle, id) {
    const editedTitle = books.map((book, index) => {
      if (index === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(editedTitle);
  }

  function handleDelete(deleteBook) {
    const filteredBooks = books.filter((book) => book.id !== deleteBook.id);

    setBooks(filteredBooks);

    if (filteredBooks.length === 0) {
      setBookEmpty(true);
    }
  }

  return (
    <div className="App">
      <BookList
        isBookEmpty={isBookEmpty}
        setBookEmpty={setBookEmpty}
        onDelete={handleDelete}
        onEdit={handleEdit}
        books={books}
      />
      <h2>Please your favorite books</h2>
      <AddBooks onSubmit={createBook} />
    </div>
  );
}

export default App;

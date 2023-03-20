import { useState } from "react";
import AddBooks from "./components/AddBooks";
import BookList from "./components/BookLists";

function App() {
  const [name, setName] = useState("");
  const [newBook, setNewBook] = useState(false);
  const [books, setBooks] = useState([]);

  const getBookTitle = (title, id) => {
    setName(title);
    setBooks([
      ...books,
      {
        title,
        id,
      },
    ]);

    if (title) {
      setNewBook(true);
    }
  };

  const handleUpdatedList = (list) => {
    setBooks(list);
  };

  return (
    <div className="App">
      <BookList
        title={name}
        newBook={newBook}
        showBook={setNewBook}
        lists={books}
        setBooks={handleUpdatedList}
        setName={setName}
      />
      <h2>Please your favorite books</h2>
      <AddBooks getTitle={getBookTitle} />
    </div>
  );
}

export default App;

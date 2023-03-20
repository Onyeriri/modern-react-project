import { useState } from "react";
import AddBooks from "./components/AddBooks";
import BookList from "./components/BookLists";

function App() {
  const [name, setName] = useState("");
  const [newBook, setNewBook] = useState(false);
  const [books, setBooks] = useState([]);

  const getBookTitle = (title) => {
    setName(title);
    setBooks([...books, title]);

    if (title) {
      setNewBook(true);
    }
  };

  console.log(books);

  return (
    <div className="App">
      <BookList title={name} newBook={newBook} showBook={setNewBook} />
      <AddBooks getTitle={getBookTitle} />
    </div>
  );
}

export default App;

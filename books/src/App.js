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
    setBookEmpty(!isBookEmpty);
  };

  console.log(books);

  return (
    <div className="App">
      <BookList
        isBookEmpty={isBookEmpty}
        setBookEmpty={setBookEmpty}
        books={books}
        setBooks={setBooks}
      />
      <h2>Please your favorite books</h2>
      <AddBooks onSubmit={createBook} />
    </div>
  );
}

export default App;

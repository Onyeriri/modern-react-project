import { useEffect, useState } from "react";
import AddBooks from "./components/AddBooks";
import BookList from "./components/BookLists";
import useBookContext from "./hooks/use-book-context";

function App() {
  const [isBookEmpty, setIsBookEmpty] = useState(false);

  const { getAllBooks } = useBookContext();

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="App">
      <BookList isBookEmpty={isBookEmpty} setBookEmpty={setIsBookEmpty} />
      <h2>Please your favorite books</h2>
      <AddBooks />
    </div>
  );
}

export default App;

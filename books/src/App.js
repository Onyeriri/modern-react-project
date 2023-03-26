import { useEffect, useState } from "react";
import AddBooks from "./components/AddBooks";
import BookList from "./components/BookLists";
import axios from "axios";

function App() {
  const [isBookEmpty, setIsBookEmpty] = useState(false);
  const [books, setBooks] = useState([]);
  let url = `http://127.0.0.1:3001/books`;

  const getBooks = async () => {
    const response = await axios.get(url);

    setBooks(response.data);

    if (response.data.length === 0) {
      setIsBookEmpty(true);
      // console.log(typeof books.length);
    }

    // // setIsBookEmpty(false);
    // console.log(books.length);
  };

  useEffect(() => {
    // getBooks();
  }, []);

  // console.log(books);

  // create a new book and add to book array
  const createBook = async (title) => {
    if (!title) {
      return;
    }
    // const newBook = [
    //   ...books,
    //   { title, id: Math.floor(Math.random() * 999999) },
    // ];
    // setBooks(newBook);

    setIsBookEmpty(false);

    const response = await axios.post(url, {
      title,
    });

    getBooks();

    return response;
  };

  // Edit the title of a particular component by id
  async function handleEdit(newTitle, id) {
    const response = await axios.put(url + `/${id}`, {
      title: newTitle,
    });
    const editedTitle = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    getBooks();

    setBooks(editedTitle);
  }

  // delete a particular book using an id
  async function handleDelete(deleteBook) {
    const filteredBooks = books.filter((book) => {
      return book.id !== deleteBook.id;
    });

    await axios.delete(url + `/${deleteBook.id}`);

    getBooks();

    setBooks(filteredBooks);

    // if (filteredBooks.length === 0) {
    //   // setIsBookEmpty(true);
    // }
  }

  return (
    <div className="App">
      <BookList
        isBookEmpty={isBookEmpty}
        setBookEmpty={setIsBookEmpty}
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

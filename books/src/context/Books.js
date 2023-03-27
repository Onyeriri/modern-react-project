import axios from "axios";
import { useState, useCallback } from "react";
import { createContext } from "react";

const BooksContext = createContext();

export function Provider({ children }) {
  const [fsbooks, setFsBooks] = useState([]);

  const getAllBooks = useCallback(async () => {
    const response = await axios.get(`http://localhost:3001/books`);

    setFsBooks(response.data);
  }, []);

  async function editBookById(newTitle, id) {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBook = fsbooks.map((book) => {
      if (book.id === id) {
        return { ...book, title: response.data.title };
      }

      return book;
    });

    setFsBooks(updatedBook);
  }

  async function deleteBookById(bookId) {
    const filteredBooks = fsbooks.filter((book) => book.id !== bookId.id);

    await axios.delete(`http://localhost:3001/books/${bookId.id}`);

    setFsBooks(filteredBooks);
  }

  async function createBook(title) {
    const response = await axios.post(`http://localhost:3001/books`, {
      title,
    });

    setFsBooks([...fsbooks, response.data]);

    console.log(fsbooks);
  }

  const allocateBooks = {
    fsbooks,
    editBookById,
    deleteBookById,
    createBook,
    getAllBooks,
  };

  return (
    <BooksContext.Provider value={allocateBooks}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksContext;

// import { createContext, useState } from "react";

// const BooksContext = createContext();

// export function Provider({ children }) {
//   const [count, setCount] = useState(0);

//   const valueToShare = {
//     count,
//     incrementCount: () => setCount(count + 1),
//   };

//   return (
//     <BooksContext.Provider value={valueToShare}>
//       {children}
//     </BooksContext.Provider>
//   );
// }

// export default BooksContext;

import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

const BooksContext = createContext();

export function Provider({ children }) {
  const [books, setBooks] = useState([]);

  async function getAllBooks() {
    const response = await axios.get(`http://localhost:3001/books`);

    const data = {
      ...books,
      ...response.data,
    };

    setBooks(data);

    console.log(response.data);
    console.log([data]);
  }

  async function editBooksById(id, newTitle) {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: response.data.title };
      }

      return book;
    });

    setBooks(updatedBook);
  }

  async function deleteBookById(id) {
    const filteredBooks = books.filter((book) => book.id !== id);

    await axios.delete(`http://localhost:3001/books/${id}`);

    setBooks(filteredBooks);
  }

  async function createBook(title) {
    const response = await axios.post(`http://localhost:3001/books`, {
      title,
    });

    setBooks([...books, response.data]);

    console.log(books);
  }

  const allocateBooks = {
    books,
    editBooksById,
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

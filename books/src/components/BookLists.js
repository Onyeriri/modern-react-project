import Book from "./Book";
import { useContext } from "react";
import BooksContext from "../context/Books";

function BookList({ isBookEmpty, onDelete, onEdit }) {
  const { fsbooks } = useContext(BooksContext);

  const renderedBooks = fsbooks.map((book) => {
    return (
      <Book book={book} key={book.id} onEdit={onEdit} onDelete={onDelete} />
    );
  });

  // console.log(books);

  const displayBook = isBookEmpty ? (
    <h1>No Book to display, add books</h1>
  ) : (
    renderedBooks
  );

  return <div>{displayBook}</div>;
}

export default BookList;

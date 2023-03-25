import Book from "./Book";

function BookList({ isBookEmpty, books, onDelete, onEdit }) {
  const renderedBooks = books.map((book, index) => {
    return <Book book={book} key={index} onEdit={onEdit} onDelete={onDelete} />;
  });

  const displayBook = isBookEmpty ? (
    <h1>No Book to display, add books</h1>
  ) : (
    renderedBooks
  );

  return <div>{displayBook}</div>;
}

export default BookList;

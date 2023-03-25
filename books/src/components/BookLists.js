import Book from "./Book";

function BookList({ isBookEmpty, books, onDelete, onEdit }) {
  const renderedBooks = books.map((book) => {
    return (
      <Book book={book} key={book.id} onEdit={onEdit} onDelete={onDelete} />
    );
  });

  console.log(books);

  const displayBook = isBookEmpty ? (
    <h1>No Book to display, add books</h1>
  ) : (
    renderedBooks
  );

  return <div>{displayBook}</div>;
}

export default BookList;

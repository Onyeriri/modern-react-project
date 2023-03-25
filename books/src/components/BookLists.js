import Book from "./Book";

function BookList({ isBookEmpty, setBookEmpty, books, setBooks }) {
  const renderedBooks = books.map((book, index) => {
    return (
      <Book
        book={book}
        key={index}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    );
  });

  function handleDelete(deleteBook) {
    const filteredBooks = books.filter((book) => book.id !== deleteBook.id);

    setBooks(filteredBooks);

    if (filteredBooks.length === 0) {
      setBookEmpty(true);
    }

    // console.log(id);
  }

  function handleEdit(newTitle, id) {
    const editedTitle = books.map((book, index) => {
      if (index === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(editedTitle);
  }

  const displayBook = isBookEmpty ? (
    <h1>No Book to display, add books</h1>
  ) : (
    renderedBooks
  );

  return <div>{displayBook}</div>;
}

export default BookList;

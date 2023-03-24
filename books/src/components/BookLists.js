import Book from "./Book";

function BookList({ isBookEmpty, setBookEmpty, books, setBooks }) {
  const renderedBooks = books.map((book, index) => {
    return (
      <Book
        onSaveBooks={setBooks}
        books={books}
        book={book}
        key={index}
        onEdit={handleEdit}
      />
    );
  });

  function handleEdit(newTitle, id) {
    setBooks([...books, { title: newTitle, id: id }]);

    console.log(books);
  }

  const displayBook = isBookEmpty ? (
    <h1>No Book to display, add books</h1>
  ) : (
    renderedBooks
  );

  return <div>{displayBook}</div>;
}

export default BookList;

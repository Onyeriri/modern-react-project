import Book from "./Book";

function BookList({ title, newBook, showBook, lists, setBooks, setName }) {
  function handleDelete(id) {
    const newLists = lists.filter((list) => list.id !== id);

    setBooks(newLists);

    if (newLists.length === 0) showBook(false);
  }

  const renderedBooks = lists.map((list, index) => {
    return (
      <Book
        title={title}
        newBook={newBook}
        showBook={showBook}
        list={list}
        key={index}
        id={index}
        setName={setName}
        handleDelete={handleDelete}
      />
    );
  });

  const displayBook = newBook ? (
    renderedBooks
  ) : (
    <h1>No Book to display, add books</h1>
  );

  return <div>{displayBook}</div>;
}

export default BookList;

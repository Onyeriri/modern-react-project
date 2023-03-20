import Book from "./Book";

function BookList({ title, newBook, showBook }) {
  return (
    <div>
      <Book title={title} newBook={newBook} showBook={showBook} />
    </div>
  );
}

export default BookList;

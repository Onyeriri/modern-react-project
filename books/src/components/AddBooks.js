import { useState, useContext } from "react";
import BooksContext from "../context/Books";

function AddBooks() {
  const [title, setTitle] = useState("");
  const { createBook } = useContext(BooksContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createBook(title);
    setTitle("");
  };

  function handleChange(e) {
    setTitle(e.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"></label>
        <input value={title} name="title" onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default AddBooks;

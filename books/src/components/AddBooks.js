import { useState, useContext } from "react";
import useBookContext from "../hooks/use-book-context";

function AddBooks() {
  const [title, setTitle] = useState("");
  const { createBook } = useBookContext();

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

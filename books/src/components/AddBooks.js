import { useState } from "react";

function AddBooks({ getTitle }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    getTitle(title);
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

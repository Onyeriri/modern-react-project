import { useState } from "react";

function AddBooks({ onSubmit }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(title);
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

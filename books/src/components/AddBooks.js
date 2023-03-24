import { useState } from "react";

function AddBooks({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(title, id);
    setId(id + 1);
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

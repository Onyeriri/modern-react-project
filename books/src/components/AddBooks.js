import { useState } from "react";

function AddBooks({ getTitle }) {
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setId(id + 1);

    getTitle(title, id);
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

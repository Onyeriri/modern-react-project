import { useState } from "react";

function Book({ title, newBook, showBook }) {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");

  const handleEdit = (e) => {
    setEdit(true);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSave = () => {
    setEdit(false);
  };

  const handleDelete = () => {
    showBook(false);
  };

  console.log(title);

  return (
    <div>
      {newBook ? (
        <div>
          <span onClick={handleEdit}>edit</span>
          <span onClick={handleDelete}>delete</span>
          <br />
          <img src="" alt="Book" />
          <h2>{name !== "" ? name : title}</h2>
          <br />

          {edit && (
            <div>
              <input value={name} onChange={handleChange} type="text" />
              <button onClick={handleSave}>save</button>
            </div>
          )}
        </div>
      ) : (
        <h1>No Book to display, add books</h1>
      )}
    </div>
  );
}

export default Book;

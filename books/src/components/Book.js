import { useState } from "react";

function Book({ list, handleDelete }) {
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

  return (
    <div>
      <div>
        <span onClick={handleEdit}>edit</span>
        <span onClick={() => handleDelete(list.id)}>delete</span>
        <br />
        <img src="" alt="Book" />
        <h2>{name === "" ? list.title : name}</h2>
        <br />

        {edit && (
          <div>
            <input value={name} onChange={handleChange} type="text" />
            <button onClick={handleSave}>save</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Book;

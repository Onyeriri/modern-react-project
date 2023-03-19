import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userInput);

    setUserInput("");
  };

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Search input</label>
      <br />
      <input
        value={userInput}
        onChange={handleChange}
        placeholder="Enter your search term"
      />
    </form>
  );
}

export default SearchBar;

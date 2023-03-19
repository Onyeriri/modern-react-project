import { useState } from "react";
import searchImage from "./api";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [urls, setUrls] = useState([]);

  const handleSearchTerm = async (term) => {
    const responses = await searchImage(term);
    setUrls(responses);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSearchTerm} />
      <div className="App">
        <ImageList urls={urls} />
      </div>
    </div>
  );
}

export default App;

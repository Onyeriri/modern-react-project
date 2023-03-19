import SearchBar from "./components/SearchBar";

function App() {
  const handleSearchTerm = (term) => {
    console.log("You entered the following: " + term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSearchTerm} />
    </div>
  );
}

export default App;

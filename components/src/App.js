import DropDown from "./components/DropDown";

function App() {
  const options = [
    { label: "Green", value: "green" },
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
  ];
  return (
    <div>
      <DropDown options={options} />
    </div>
  );
}

export default App;

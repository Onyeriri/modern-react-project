import { useState } from "react";
import DropDown from "./components/DropDown";

function App() {
  const [selected, setSelected] = useState(null);

  const handleSelected = (userOption) => {
    setSelected(userOption);
  };

  const options = [
    { label: "Green", value: "green" },
    { label: "Red", value: "red" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div>
      <DropDown options={options} onChange={handleSelected} value={selected} />
    </div>
  );
}

export default App;

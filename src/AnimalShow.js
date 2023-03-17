import { useState } from "react";

function AnimalShow() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <h1>Number of animals: {count}</h1>
    </div>
  );
}
export default AnimalShow;

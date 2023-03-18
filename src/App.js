import AnimalShow from "./AnimalShow";
import { useState } from "react";

const getRandomAnimal = () => {
  const animals = ["Cow", "Zebra", "Horse", "Lion", "Sheep", "Panda's"];
  let randomNumber = Math.floor(Math.random() * animals.length);
  const selectedAnimal = animals[randomNumber];

  return selectedAnimal;
};

function App() {
  const [animals, setAnimal] = useState([]);

  const handleClick = () => {
    setAnimal([...animals, getRandomAnimal()]);
  };

  const renderAnimal = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <button onClick={handleClick}>Add Animal</button>
      <h1>{renderAnimal}</h1>
    </div>
  );
}

export default App;

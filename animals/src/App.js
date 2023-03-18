import AnimalShow from "./AnimalShow";
import { useState } from "react";
import "./App.css";

const getRandomAnimal = () => {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
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
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div>
        <div className="render">{renderAnimal}</div>
      </div>
    </div>
  );
}

export default App;

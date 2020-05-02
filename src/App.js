import React, { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/header";

function App() {
  const [animal, setAnimal] = useState("Mango");
  const updateAnimal = () => {
    setAnimal("banana");
  };
  return (
    <div className="App">
      <HeaderComponent animalName={animal} updateAnimalName={updateAnimal} />
    </div>
  );
}

export default App;

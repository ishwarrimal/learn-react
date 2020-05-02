import React, { useState } from "react";
import AnimalView from "./animal";

const HeaderComponent = (props) => {
  const [name, setName] = useState("Avinash");
  const updateName = () => {
    setName("Ishwar");
  };
  return (
    <div>
      <h1>I am header</h1>
      <h2>My name is {name}</h2>
      <button value="update name" onClick={updateName}>
        Update Name
      </button>
      <AnimalView animal={props.animalName} />
    </div>
  );
};

export default HeaderComponent;

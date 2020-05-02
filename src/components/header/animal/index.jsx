import React from "react";

const AnimalView = (props) => {
  return (
    <>
      <h1>{props.animalName}</h1>
      <button onClick={props.updateAnimalName}>Update Animal</button>
    </>
  );
};

export default AnimalView;

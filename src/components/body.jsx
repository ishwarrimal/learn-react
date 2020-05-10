import React from "react";

const BodyComponent = (props) => {
  return (
      <div>
        <input key="input" type="text" onChange={props.nameChange} />        
        <br/>
        <button key="click" onClick={props.clickAction}> Show Name </button>        
      </div>        
  );
};

export default BodyComponent;
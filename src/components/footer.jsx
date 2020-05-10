import React from "react";

const FooterComponent = (props) => {
  return (
    <div>
      <br/>
      <footer>{props.name}</footer>      
    </div>
  );
};

export default FooterComponent;

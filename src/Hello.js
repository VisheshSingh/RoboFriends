import React from "react";

const Hello = props => {
  return (
    <div className="f1 tc">
      <h1>Hola Mundo!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt,
        vero!
      </p>
      <p>{props.greeting}</p>
    </div>
  );
};

export default Hello;

import React from "react";
import Card from "./Card";

const CardList = props => {
  const { robots } = props;

  const cardComponent = robots.map(robot => {
    return (
      <Card
        id={robot.name}
        name={robot.name}
        email={robot.email}
        key={robot.id}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default CardList;

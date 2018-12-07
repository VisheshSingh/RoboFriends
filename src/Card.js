import React from "react";

const Card = props => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src="https://www.robohash.org/test?200X200" alt="robots" />
      <div>
        <h2>John Doe</h2>
        <p>JohnDoe@gmail.com</p>
      </div>
    </div>
  );
};

export default Card;

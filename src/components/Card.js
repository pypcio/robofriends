import React from "react";

const Card = ({ robots, index }) => {
  return (
    <React.Fragment>
      <div key={index} className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
        <img
          alt="robo-friend"
          src={`https://robohash.org/${robots.id}?size=200x200`}
        />
        <h3>{robots.name}</h3>
        <p> {robots.email}</p>
      </div>
    </React.Fragment>
  );
};
export default Card;

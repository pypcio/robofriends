import React from "react";

const Card = ({ robots, index }) => {
  return (
    <React.Fragment>
      <div key={index} className="bg-light-green dib br3 pa3 ma2 grow shadow-5">
        <img
          alt="robo-friend"
          src={`https://robohash.org/${robots.id}?size=200x200`}
        />
        <h2>{robots.name}</h2>
        <h3> {robots.username}</h3>
        <h4> {robots.email}</h4>
      </div>
    </React.Fragment>
  );
};
export default Card;

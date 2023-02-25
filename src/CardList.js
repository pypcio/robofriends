import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const tab = robots.map((element, index) => {
    return <Card robots={element} index={index} />;
  });
  return <React.Fragment>{tab}</React.Fragment>;
};
export default CardList;

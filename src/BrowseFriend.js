import React from "react";

const BrowseFriend = ({ search }) => {
  return (
    <React.Fragment>
      <div>
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type={"text"}
          placeholder={"Find your friend"}
          onChange={search}
        />
      </div>
    </React.Fragment>
  );
};

export default BrowseFriend;

import React from "react";

const Scroll = (list) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "500px",
      }}
    >
      {list.children}
    </div>
  );
};

export default Scroll;

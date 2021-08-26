import React from "react";

const Check = ({ checked, onClick }) => {
  if (checked === true) {
    return (
      <span
        className="material-icons favorite"
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        favorite
      </span>
    );
  } else {
    return (
      <span
        className="material-icons text-muted"
        style={{ cursor: "pointer" }}
        onClick={onClick}
      >
        favorite
      </span>
    );
  }
};

export default Check;

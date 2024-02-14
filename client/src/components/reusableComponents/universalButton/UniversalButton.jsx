// UniversalButton.jsx
import React from "react";
import "./UniversalButton.scss";

const UniversalButton = ({ onClick, label }) => {
  return (
    <button className="universal-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default UniversalButton;

import React from "react";
import "./ClearButton.css";

const ClearButton = props => (
  <div
    onClick={() => props.handleClick(props.children)}
    className="clear-button"
  >
    {props.children}
  </div>
);

export default ClearButton;

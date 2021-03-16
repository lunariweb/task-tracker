import React from "react";
import "./Button.css";

const Button = ({ button_title, onClick }) => {
  return (
    <div className="button" onClick={onClick}>
      <h3>{button_title}</h3>
    </div>
  );
};

export default Button;

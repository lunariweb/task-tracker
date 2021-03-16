import React from "react";
import "./Button.css";

const Button = ({ onAdd, showAdd, color }) => {
  return (
    <div className="button" onClick={onAdd} style={{ backgroundColor: color }}>
      <h3>{showAdd ? "Close" : "Add"}</h3>
    </div>
  );
};

export default Button;

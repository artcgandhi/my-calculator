import React from "react";
import "./Button.css";

const Button = ({ btnName, ...rest }) => {
  return <button {...rest}>{btnName}</button>;
};

export default Button;

import React from "react";
import "./error-indicator.css";
import jpg from "./error.png";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <span className="warning">Something went wrong</span>
      <img src={jpg} alt="error icon" />
      <span className="warning">BUT WE WILL FIX IT</span>
    </div>
  );
};
export default ErrorIndicator;

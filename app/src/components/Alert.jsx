import React from "react";

const Alert = ({ type, text }) => {
  return (
    <>
      <div className="overlay">
        <div className={`alert alert-${type}`}>{text}</div>
      </div>
    </>
  );
};

export default Alert;

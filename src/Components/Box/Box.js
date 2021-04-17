import React from "react";
import "./Box.css";

function Box({ image }) {
  return (
    <div className="box">
      <img src={image} alt="img" />
    </div>
  );
}

export default Box;

import React from "react";
import "./DisplayCalculation.css";

const DisplayCalculation = ({ result }) => {
  return (
    <div className="lower-section">
      <p id="result-paragraph" className="pln">
        {result} PLN
      </p>
    </div>
  );
};

export default DisplayCalculation;

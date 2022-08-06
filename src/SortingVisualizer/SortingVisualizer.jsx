import React, { useEffect, useState } from "react";
import "./style.css";
import resetArray from "../sortComponents/onArrayReset";

const PRIMARY_COLOR = "#411530";

const SortingVisualizer = ({ shouldRender, setArrayClone }) => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray(setArray, setArrayClone);
  }, [shouldRender]);

  return (
    <div className="sorting-visualizer">
      <div className="array-container">
        {array?.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;

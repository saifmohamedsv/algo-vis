import "./App.css";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import mergeSort from "./sortComponents/onMergeSort";
import { useState } from "react";

function App() {
  const [renderArray, setRender] = useState(false);
  const [arrayClone, setArrayClone] = useState(false);
  return (
    <div className="App">
      <div className="navbar">
        <h2>AlgoVis</h2>
        <ul className="navbar__list">
          <li
            className="navbar__listItem"
            onClick={() => setRender((prev) => !prev)}
          >
            generate a new array
          </li>
          <li
            className="navbar__listItem"
            onClick={() => mergeSort(arrayClone)}
          >
            start Merge Sort
          </li>
        </ul>
      </div>
      <div className="visualizer-bars-container">
        <SortingVisualizer
          shouldRender={renderArray}
          setArrayClone={setArrayClone}
        ></SortingVisualizer>
      </div>
    </div>
  );
}

export default App;

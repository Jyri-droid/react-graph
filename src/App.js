import React  from 'react';
import Graph from './components/Graph.js';
import './App.css';

// Skeleton graph – before data arrives from server
// Use state > CodeSandbox
// Use effect

const graph = {
  title: "Accumulation of my React skillz",
  graphHeight: "320px",
  showDatapointMarker: true,
  legend: "New concepts grasped",
  xLabels: [
    "1.4.2022",
    "2.4.2022", 
    "3.4.2022", 
    "4.4.2022", 
    "5.4.2022", 
    "6.4.2022", 
    "7.4.2022", 
    "8.4.2022", 
  ],
  lineColors: ["fuchsia", "cyan", "yellow", ],
  values: [-3, 1, 2, 6, 8, 12, 16, 20],
  testValues: [
    [1, 2, 3, 4, 5, 6, 7, 8], 
    [20, -5, 8, 14, 12, 10, 3, 6], 
    [15, 5, 15, 5, 15, 5, 15, 5],
    [-10, 20, -10, 20, -10, 20, -10, 20],
  ],
};


const App = () => {
  return (
    <div className="App">
      <Graph 
        title={graph.title} 
        graphHeight={graph.graphHeight} 
        showDatapointMarker={graph.showDatapointMarker} 
        legend={graph.legend}
        xLabels={graph.xLabels}
        lineColors={graph.lineColors}
        values={graph.values}
        testValues={graph.testValues}
      />
    </div>
  );
}

export default App;
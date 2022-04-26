import React  from 'react';
import Graph from './components/Graph.js';
import './App.css';

// Skeleton graph – before data arrives from server
// Use state > CodeSandbox
// Use effect

// Convert JS Object to array containing obejcts

const graph = {
  title: "Accumulation of my React skillz",
  graphHeight: "320px",
  showDatapointMarker: true,
  legends: ["Self-confidence", "Complexity of code", "New concepts grasped"],
  lineColors: ["fuchsia", "cyan", "yellow", "gray"],
  dataPoints: [
    [20, -10, 20, -10, 20, -10, 20, -10], 
    [-10, -8, -5, -3, 3, 9, 19, 20], 
    [-10, -9, -7, 1, 11, 11, 12, 16],
    // [-10, 20, -10, 20, -10, 20, -10, 20],
  ],
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
  values: [-3, 1, 2, 6, 8, 12, 16, 20],
};


const App = () => {

  return (
    <div className="App">
      <Graph 
        title={graph.title} 
        graphHeight={graph.graphHeight} 
        showDatapointMarker={graph.showDatapointMarker} 
        legends={graph.legends}
        xLabels={graph.xLabels}
        lineColors={graph.lineColors}
        values={graph.values}
        dataPoints={graph.dataPoints}
      />
    </div>

  );
}

export default App;
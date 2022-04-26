import Intervals from './Intervals.js';
import GraphLine from './GraphLine.js';
import YLabels from './YLabels.js';
import XLabels from './XLabels.js';
import Legend from './Legend.js';
import { useState } from "react";
import "../intervalCalculator.js";

// Count a pretty range and intervals
const getPowerOfTen = (number) => {
  if (!number || number === 0 /* || Number.isNan(number) */) { return 0; };
  let multiplier = .1;
  number = Math.abs(number);
  while (number / multiplier < 1 || number / multiplier >= 10) {
      multiplier = multiplier * 10;
  }
  return multiplier;
}

const getDividingNumber = (number) => {
  let dividingNumber = 3;
  let division = number / dividingNumber;
  while (division !== Math.floor(division)) {
      dividingNumber++;
      division = number / dividingNumber;
  }
  return dividingNumber; 
}

const getIntervalValues = (values) => {
  // Get smallest and highest numbers in values
  let min = Math.min(...values);
  let max = Math.max(...values);
  // Check which one has bigger power of ten
  let powerOfTen;
  if (getPowerOfTen(max) >= getPowerOfTen(min)) {
      powerOfTen = getPowerOfTen(max);
  } else {
      powerOfTen = getPowerOfTen(min);
  }
  // Round smallest and highest numbers into root numbers between 0-100
  min = Math.floor(min / powerOfTen) * 10;
  max = Math.ceil(max / powerOfTen) * 10;
  // Count range and make pretty
  const range = max - min;
  const amountOfSteps = getDividingNumber(range);
  const steps = [];
  for (let j = 0; j < amountOfSteps + 1; j++) {
      steps.push(((range / amountOfSteps) * j + min) * powerOfTen / 10);
  }
  return steps;
}


// Render graph
const Graph = (props) => {

  const { title, graphHeight, showDatapointMarker, legends, xLabels, lineColors, values, dataPoints } = props;

  const intervals = getIntervalValues(values);

  const initialVisibility = [];
  for (let i = 0; i < dataPoints.length; i++) {
    initialVisibility.push(i);
  }

  const [visibility, setVisibility] = useState(initialVisibility);

  return (
    <>
    <div className="graph" style={{height: graphHeight}}>

      <h3>{title}</h3>
      
      <div className="graphContainer">

        <div className="leftColumn">
          <svg xmlns="http://www.w3.org/2000/svg" id="graphSvg" width="100%" overflow="visible">
            <Intervals values={values} intervals={intervals}/>
            <GraphLine 
              dataPoints={dataPoints} 
              values={values} 
              intervals={intervals} 
              showDatapointMarker={showDatapointMarker} 
              lineColors={lineColors}
              visibility={visibility}
            />
          </svg>
          <div className="xLabels">
            <XLabels values={values} xLabels={xLabels}/>
          </div>
        </div>
        
        <div className="yLabels">
            <YLabels intervals={intervals}/>
        </div>

      </div>
      <div className="legendContainer">
        {legends.map((value, index) => 
          <Legend 
            text={value} 
            lineColor={props.lineColors[index]}
            visibility={visibility}
            setVisibility={setVisibility}
            index={index}
            key={"legend" + index}
          />)}
      </div>

    </div>
    </>
  );
}

export default Graph;
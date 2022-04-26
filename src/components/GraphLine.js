import Line from './Line.js';
import Circle from './Circle.js';

// SVG object props
const line = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
    stroke: "springGreen",
    strokeWidth: 2,
}

const circle = {
    cx: 0,
    cy: 0,
    r: 3,
    stroke: "springGreen",
    strokeWidth: 2,
}

// Translate Y data to graph height in %
const getY = (value, intervals) => {
    const range = Math.max(...intervals) - Math.min(...intervals);
    // Count position on graph in %
    let y = value / range * 100;
    // Calibrate position for negative values
    y = y - (Math.min(...intervals) / range * 100);
    return 100 - y + "%";
}

// Translate X data to graph width in %
const getX = (amountOfDataPoints, index) => {
    const margin = 100 / (amountOfDataPoints + 1) / 2;
    const step = (100 - margin * 2) / (amountOfDataPoints);
    return margin + step * index + "%";
}

const GraphLine = (props) => {

    // Multiple lines
    const allLines = props.dataPoints.map((objectValue, objectIndex) => {

        const amountOfDataPoints = objectValue.length - 1;
        console.log("Visibility", props.visibility);
        console.log(props.visibility.includes(objectIndex));
        

        // Create lines
        const lineElements = objectValue.map((arrayValue, arrayIndex) =>

            <Line {...line} 
                x1={getX(amountOfDataPoints, arrayIndex)} 
                x2={getX(amountOfDataPoints, arrayIndex + 1)}    
                y1={getY(arrayValue, props.intervals)}
                y2={getY(objectValue[arrayIndex + 1], props.intervals)}
                style={{stroke: props.lineColors[objectIndex], opacity: props.visibility.includes(objectIndex) ? 1 : 0}}
                key={"line" + arrayValue + arrayIndex}
            />
        );
        lineElements.pop();


        const datapointElements = objectValue.map((arrayValue, arrayIndex) => 
            <Circle {...circle}
                cx={getX(amountOfDataPoints, arrayIndex)} 
                cy={getY(arrayValue, props.intervals)} 
                style={{stroke: props.lineColors[objectIndex], opacity: props.showDatapointMarker && props.visibility.includes(objectIndex) ? 1 : 0}}
                key={"circle" + arrayValue + arrayIndex}
            />
        );
        return [...lineElements, ...datapointElements];
        

    });

 
    return <>{allLines}</>;

}
  
export default GraphLine;
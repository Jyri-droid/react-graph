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
    r: 4,
    stroke: "springGreen",
    strokeWidth: 4,
}

// Translate data to graph height in %
const getY = (value, intervals) => {
    const range = Math.max(...intervals) - Math.min(...intervals);
    // Count position on graph in %
    let y = value / range * 100;
    // Calibrate position for negative values
    y = y - (Math.min(...intervals) / range * 100);
    return 100 - y + "%";
}

const GraphLine = (props) => {

    // TEST Print one or multiple arrays inside Graph JS object in console
    props.testValues.map((value) => {
        value.map((value, index) => {
            return console.log("Value: " + value + " Index: " + index + "/");
        });
        return console.log("Done");
    });

    // TEST Multiple lines
    const testValues = props.testValues.map((objectValue, objectIndex) => {

        const getX = (index) => {
            const margin = 100 / ((objectValue.length - 1)  + 1) / 2;
            const step = (100 - margin * 2) / (objectValue.length - 1);
            return margin + step * index + "%";
        }

        const lines = objectValue.map((arrayValue, arrayIndex) => 

            <Line {...line} style={{stroke: props.lineColors[objectIndex]}}
                y1={getY(arrayValue, props.intervals)}
                y2={getY(objectValue[arrayIndex + 1], props.intervals)} 
                x1={getX(arrayIndex)} 
                x2={getX(arrayIndex + 1)}
                key={arrayValue + arrayIndex}
            />
        );
        lines.pop();
        return lines;

    });

    // Count X points
    const values = [...props.values];
    const getX = (index) => {
        const margin = 100 / ((values.length - 1)  + 1) / 2;
        const step = (100 - margin * 2) / (values.length - 1);
        return margin + step * index + "%";
    }


    // Create line
    const graphLines = values.map((value, index) => (
        <Line {...line}
            y1={getY(value, props.intervals)} 
            y2={getY(props.values[index + 1], props.intervals)} 
            x1={getX(index)} 
            x2={getX(index + 1)}
            key={value}
        />
    ));
    graphLines.pop();
    // Create circles
    if (props.showDatapointMarker) {
        const circles = props.values.map((value, index) => (
            <Circle {...circle} 
                cx={getX(index)} 
                cy={getY(value, props.intervals)} 
                key={value}
            />
        ));
        return <>{graphLines}{circles}{testValues}</>;
    } else { 
        return <>{graphLines}</>;
    }
}
  
export default GraphLine;

// ADD FUNCTIONS INSIDE COMPONENT -> LESS HASSLE AND DON'T HAVE TO HAVE PROPS JUMP AROUND
